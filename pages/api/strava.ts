import pb from "data/pd";
import { NextApiRequest, NextApiResponse } from "next";

async function getFreshAccessToken(refresh_token: string) {
  const response = await fetch("https://www.strava.com/api/v3/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh token: ${response.statusText}`);
  }

  return await response.json();
}

async function getTimeSlot() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "evening";
  return "night";
}

async function hasRequestedToday(time_slot: string) {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  try {
    const record = await pb
      .collection("request_times")
      .getFirstListItem(`time_slot="${time_slot}" && request_date>="${today}"`);
    return !!record;
  } catch (e) {
    return false; // No request found for today
  }
}

async function saveRequestTime(time_slot: string) {
  await pb.collection("request_times").create({
    time_slot,
    request_date: new Date().toISOString(),
  });
}

async function saveActivities(activites: any[]) {
  for (const activity of activites) {
    try {
      // Check if activity already exists to avoid duplicates
      const exists = await pb
        .collection("activites")
        .getFirstListItem(`activity_id="${activity.id}"`, {
          requestKey: null,
        })
        .catch(() => null);

      if (!exists) {
        await pb.collection("activites").create({
          activity_id: activity.id,
          name: activity.name,
          distance: activity.distance,
          moving_time: activity.moving_time,
          elapsed_time: activity.elapsed_time,
          type: activity.type,
          start_date: activity.start_date,
          start_date_local: activity.start_date_local,
          timezone: activity.timezone,
          total_elevation_gain: activity.total_elevation_gain,
          average_speed: activity.average_speed,
          max_speed: activity.max_speed,
          elev_high: activity.elev_high,
          elev_low: activity.elev_low,
        });
      }
    } catch (error) {}
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await pb.admins.authWithPassword(
      process.env.DBUSERNAME!,
      process.env.DBPASSWORD!
    );

    const time_slot = await getTimeSlot();
    const { start, end } = req.query;
    // Check if we've already made a request for this time slot today
    if (await hasRequestedToday(time_slot)) {
      // Fetch activites from PocketBase
      const filter =
        start && end ? `start_date>="${start}" && start_date<="${end}"` : "";
      const activites = await pb.collection("activites").getList(1, 50, {
        filter,
        sort: "-start_date",
      });
      return res.status(200).json(activites.items);
    }

    // Get token from PocketBase
    const record = await pb.collection("tokens").getFirstListItem("");
    let access_token = record.access_token;

    // Check if token is expired
    if (Date.now() / 1000 > record.expires_at) {
      const newToken = await getFreshAccessToken(record.refresh_token);

      // Update token in PocketBase
      await pb.collection("tokens").update(record.id, {
        access_token: newToken.access_token,
        refresh_token: newToken.refresh_token,
        expires_at: newToken.expires_at,
      });

      access_token = newToken.access_token;
    }
    // Fetch activites from Strava
    const activitiesRes = await fetch(
      "https://www.strava.com/api/v3/athlete/activities",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    if (!activitiesRes.ok) {
      throw new Error(`Strava API error: ${activitiesRes.statusText}`);
    }

    const activites = await activitiesRes.json();

    // Save activites to PocketBase
    await saveActivities(activites);

    // Record the request time
    await saveRequestTime(time_slot);

    // Fetch saved activites from PocketBase with date range filter
    const filter =
      start && end ? `start_date>="${start}" && start_date<="${end}"` : "";
    const savedActivities = await pb.collection("activites").getList(1, 50, {
      filter,
      sort: "-start_date",
    });

    res.status(200).json(savedActivities.items);
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
