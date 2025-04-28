import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parseISO,
  startOfMonth,
  subDays,
  subMonths,
} from "date-fns";
import { useEffect, useState } from "react";

const CustomActivityCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [activities, setActivities] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calculate fetch range
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const firstDayOfMonth = (getDay(monthStart) + 6) % 7; // Mon=0, ..., Sun=6
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const prevMonthDaysCount = firstDayOfMonth;
  const prevMonthStart = prevMonthDaysCount
    ? subDays(monthStart, prevMonthDaysCount)
    : monthStart;
  const totalCells = 42; // 6 weeks × 7 days
  const currentAndPrevDays = prevMonthDaysCount + daysInMonth.length;
  const nextMonthDaysCount = totalCells - currentAndPrevDays;
  const nextMonthEnd = addDays(monthEnd, nextMonthDaysCount);

  // Fetch activities for the visible range
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const start = format(prevMonthStart, "yyyy-MM-dd");
        const end = format(nextMonthEnd, "yyyy-MM-dd");
        const response = await fetch(`/api/strava?start=${start}&end=${end}`);
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }
        const data = await response.json();
        setActivities(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching activities");
        setLoading(false);
      }
    };

    fetchActivities();
  }, [currentMonth]); // Refetch when currentMonth changes

  // Filter activities for the current month
  const monthActivities = activities.filter((activity) => {
    const activityDate = parseISO(activity["start_date_local"]);
    return activityDate >= monthStart && activityDate <= monthEnd;
  });

  // Group activities by date (YYYY-MM-DD)
  const activitiesByDate = activities.reduce((acc, activity) => {
    const date = format(parseISO(activity["start_date_local"]), "yyyy-MM-dd");
    if (!acc[date]) acc[date] = [];
    acc[date].push(activity);
    return acc;
  }, {} as Record<string, Record<string, any>[]>);

  // Calculate monthly stats
  const totalActivities = monthActivities.length;
  const totalDistance = monthActivities
    .filter((a) => a["type"] === "Ride")
    .reduce((sum, a) => sum + a["distance"] / 1000, 0);
  const totalTimeSeconds = monthActivities.reduce(
    (sum, a) => sum + a["moving_time"],
    0
  );
  const totalHours = Math.floor(totalTimeSeconds / 3600);
  const totalMinutes = Math.floor((totalTimeSeconds % 3600) / 60);
  const rideCount = monthActivities.filter(
    (a) => a["type"] === "Ride" || a["type"] === "Workout"
  ).length;
  const workoutCount = monthActivities.filter(
    (a) => a["type"] === "WeightTraining"
  ).length;

  // Format time as "Xh Ym"
  const formatTime = (hours: number, minutes: number) => {
    if (hours === 0 && minutes === 0) return "0m";
    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m`;
  };

  // Generate calendar days
  const prevMonthDays = prevMonthDaysCount
    ? eachDayOfInterval({
        start: prevMonthStart,
        end: subDays(monthStart, 1),
      })
    : [];
  const nextMonthDays = nextMonthDaysCount
    ? eachDayOfInterval({
        start: addDays(monthEnd, 1),
        end: nextMonthEnd,
      })
    : [];
  const allDays = [...prevMonthDays, ...daysInMonth, ...nextMonthDays];

  // Navigation handlers
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="px-4 max-w-[600px] mx-auto mt-10">
      <div className="mb-10">
        <h1 className="lowercase font-poppins text-3xl font-bold mb-4">
          his Fitness Quests
        </h1>
        <p className="text-[18px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mt-2">
          he tracks his fitness quests using hevy/strava app, and here are the
          some stats that keeps him consistent and moving.
        </p>
      </div>
      <div className="p-6 mobile:p-2 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevMonth}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Previous month"
          >
            ←
          </button>
          <h1 className="text-xl font-bold">
            {format(currentMonth, "MMMM yyyy")}
          </h1>
          <button
            onClick={nextMonth}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Next month"
          >
            →
          </button>
        </div>
        {loading && <div className="text-center text-gray-500">Loading...</div>}
        {error && activities.length === 0 && (
          <div className="text-center text-red-500">{error}</div>
        )}
        {!loading && (
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Weekday headers */}
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="font-semibold text-gray-600 mt-6 mb-4">
                {day}
              </div>
            ))}
            {/* Calendar days */}
            {allDays.map((day) => {
              const dateStr = format(day, "yyyy-MM-dd");
              const dayActivities = activitiesByDate[dateStr] || [];
              const hasRide = dayActivities.some(
                (a: any) => a["type"] === "Ride" || a["type"] === "Workout"
              );
              const hasWorkout = dayActivities.some(
                (a: any) => a["type"] === "WeightTraining"
              );
              const isCurrentMonth = day >= monthStart && day <= monthEnd;

              return (
                <div
                  key={dateStr}
                  className={`relative h-18 border rounded-lg p-2 ${
                    isCurrentMonth ? "" : "opacity-40"
                  } ${
                    dayActivities.length > 0
                      ? "border-white bg-[#0B82FE] text-white font-bold"
                      : "border-red-400 border bg-red-100/50"
                  } hover:bg-[#0B82FE]/30 group`}
                >
                  <span className="text-sm">{format(day, "d")}</span>
                  {/* Icons */}
                  <div
                    className={`${
                      hasWorkout ? "bg-green-200" : "bg-orange-300"
                    } bg-white rounded-lg flex justify-center space-x-2 mt-1 text-[20px]`}
                  >
                    {hasRide && <span aria-label="Ride activity">🚴</span>}
                    {hasWorkout && (
                      <span aria-label="Workout activity">🏋️</span>
                    )}
                  </div>
                  {/* Tooltip */}
                  {dayActivities.length > 0 && (
                    <div className="absolute z-10 hidden text-start group-hover:block bg-white border border-gray-300 text-black rounded shadow-lg p-2 w-64 -left-20 top-20">
                      <h3 className="font-semibold text-sm mb-1">{dateStr}</h3>
                      <ul className="text-xs space-y-1">
                        {dayActivities.map((activity: any) => (
                          <li key={activity["id"]} className="pb-2 text-start">
                            <strong>{activity["name"]}</strong> (
                            {activity["type"]})
                            {activity["type"] === "Ride" && (
                              <span>
                                <br />
                                Distance:{" "}
                                {(activity["distance"] / 1000).toFixed(2)} km
                              </span>
                            )}
                            <br />
                            Time: {Math.floor(activity["moving_time"] / 60)} min
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {!loading && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {format(currentMonth, "MMMM yyyy")} Stats
            </h2>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-600">
                  Total Activities:
                </span>
                <span className="ml-2 text-sm font-bold text-[#0B82FE]">
                  {totalActivities}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-600">
                  Total Distance (Rides):
                </span>
                <span className="ml-2 text-sm font-bold text-[#0B82FE]">
                  {totalDistance.toFixed(2)} km
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-600">
                  Total Time:
                </span>
                <span className="ml-2 text-sm font-bold text-[#0B82FE]">
                  {formatTime(totalHours, totalMinutes)}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-600">
                  went for Cycling/running:
                </span>
                <span className="ml-2 text-sm font-bold text-[#0B82FE]">
                  {rideCount}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-600">
                  days Went to Gym:
                </span>
                <span className="ml-2 text-sm font-bold text-[#0B82FE]">
                  {workoutCount}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="mt-4 text-sm text-gray-600 flex items-center space-x-4">
          <div>
            <span className="mr-2">🚴</span>Cycling/running
          </div>
          <div>
            <span className="mr-2">🏋️</span>Gym Workout
          </div>
        </div>
      </div>
      <br />- powered by Hevy and Strava api.
    </div>
  );
};

export default CustomActivityCalendar;
