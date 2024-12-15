import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function userData() {
  const [userData, setUserData] = useState({
    id: "anshrathod999",
    username: "Anshrathod999",
    perfs: {
      bullet: {
        games: 5744,
        rating: 1565,
      },
      blitz: {
        games: 1413,
        rating: 1247,
      },
    },
    createdAt: 1624618465996,
    seenAt: 1734094094168,
    playTime: {
      total: 1246367,
    },
    url: "https://lichess.org/@/Anshrathod999",
    count: {
      all: 7389,
      rated: 7291,
      draw: 241,
      loss: 3565,
      win: 3583,
    },
  });

  useEffect(() => {
    // Fetch data from Lichess API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://lichess.org/api/user/Anshrathod999`
        );
        setUserData(response.data);
      } catch (err) {}
    };

    fetchUserData();
  }, []);

  return (
    <div className="mx-auto max-w-[600px] my-20">
      <div className=" px-6 ">
        <h1 className="uppercase font-poppins text-3xl font-bold ">
          HIS Chess stats ♟️♔♕♖♘
        </h1>
        <p className="text-gray-500 mt-2">
          He started playing chess same year he started writing code in 2020.
          doesnt plays daily maybe 3-4 matches onces a week. He suck at chess
          tbh. he has wining probability of 50% in chess against same ranked
          oponent but still plays.
        </p>
      </div>
      <div className="px-6 ">
        <div className="text-gray-500 mt-2">
          <br />

          <p>Mostly plays blitz & Bullet</p>
          <br />
          <p>
            <span className="text-black font-bold">Bullet rating 📈 </span> :{" "}
            {userData.perfs.bullet.rating} (in {userData.perfs.bullet.games}{" "}
            games)
          </p>
          <p>
            <span className="text-black font-bold">Blitz rating 📈</span>:{" "}
            {userData.perfs.blitz.rating}
            (in {userData.perfs.blitz.games} games)
          </p>
          <br />

          <p>
            <span className="text-black font-bold">Total games played</span>:{" "}
            {userData.count.all}
          </p>
          <p>
            <span className="text-black font-bold">Last game played on</span>:{" "}
            {formatTimestamp(userData.seenAt)} ({timeAgo(userData.seenAt)})
          </p>
          <p>
            <span className="text-black font-bold">Wins</span>:{" "}
            {userData.count.win} (
            {((userData.count.win / userData.count.all) * 100).toFixed(2)}%)
          </p>
          <p>
            <span className="text-black font-bold">Losses</span>:{" "}
            {userData.count.loss} (
            {((userData.count.loss / userData.count.all) * 100).toFixed(2)}
            %)
          </p>
          <p>
            <span className="text-black font-bold">Draws</span>:{" "}
            {userData.count.draw} (
            {((userData.count.draw / userData.count.all) * 100).toFixed(2)}
            %)
          </p>
          <p>
            <span className="text-black font-bold">Total play time</span>:{" "}
            {(userData.playTime.total / 3600).toFixed(2)} hours
          </p>
        </div>
        <Link href={userData.url} target="_blank" rel="noreferrer">
          <p className="text-blue-500 my-4 cursor-pointer hover:underline">
            {userData.username} - on lichess
          </p>
        </Link>
      </div>
      <div className="mt-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-2 py-2 tablet:w-full mobile:w-full  text-gray-500 mx-auto">
        <p>Message from him:</p>
        <div className="bg-gray-100 p-2 rounded-lg mt-2">
          <p>
            I messure the level of focus by playing chess. you can just know how
            much focused are you today with numbers of bluneders you make in the
            game.
          </p>
          <br />
          <p>didnt know my stats where this bad. well i dont care</p>
        </div>
      </div>
    </div>
  );
}

export default userData;
export function timeAgo(timestamp: number): string {
  const now = new Date();
  const date = new Date(timestamp);
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} second(s) ago`;
  } else if (secondsAgo < 3600) {
    const minutes = Math.floor(secondsAgo / 60);
    return `${minutes} minute(s) ago`;
  } else if (secondsAgo < 86400) {
    const hours = Math.floor(secondsAgo / 3600);
    return `${hours} hour(s) ago`;
  } else if (secondsAgo < 2592000) {
    const days = Math.floor(secondsAgo / 86400);
    return `${days} day(s) ago`;
  } else if (secondsAgo < 31536000) {
    const months = Math.floor(secondsAgo / 2592000);
    return `${months} month(s) ago`;
  } else {
    const years = Math.floor(secondsAgo / 31536000);
    return `${years} year(s) ago`;
  }
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);

  // Format the date as "Sun Dec 15 6:59 PM"
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
