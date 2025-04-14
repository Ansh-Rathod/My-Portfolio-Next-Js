"use client";
import axios from "axios";
import * as changeCase from "change-case";
import Link from "next/link";
import { useEffect, useState } from "react";
import RatingChart from "./rechart";
function ChessStats() {
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

  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchRecentGames();
  }, []);

  // Fetch data from Lichess API
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://lichess.org/api/user/Anshrathod999`
      );
      setUserData(response.data);
    } catch (err) {}
  };
  // Fetch recent games from Lichess API
  const fetchRecentGames = async () => {
    try {
      const response = await axios.get(
        `https://lichess.org/api/games/user/Anshrathod999?max=20&rated=true&analysed=false&clocks=false`,
        {
          headers: {
            Accept: "application/x-ndjson",
          },
          responseType: "text",
        }
      );
      // Split by newlines and parse each line
      const lines = response.data.trim().split("\n");
      const games = lines.map((line: any) => JSON.parse(line));

      // Example: extract usernames and ratings
      const allgames = games.map((game: any) => ({
        id: game.id,
        perf: game.perf,
        speed: game.speed,
        createdAt: game.createdAt,
        winner: game.winner,
        status: changeCase.noCase(game.status),

        white: {
          name: game.players.white.user?.name || "Anonymous",
          rating: game.players.white.rating,
          ratingDiff: game.players.white.ratingDiff,
        },
        black: {
          name: game.players.black.user?.name || "Anonymous",
          rating: game.players.black.rating,
          ratingDiff: game.players.black.ratingDiff,
        },
      }));
      setRecentGames(allgames);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto max-w-[600px] mt-20">
      <div className=" px-6 ">
        <h1 className="lowercase font-poppins text-3xl font-bold ">
          HIS Chess stats ♟️♔♕♖♘
        </h1>
        <p className="text-[18px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mt-2">
          he started playing chess same year he started writing code in 2020.
          doesnt plays daily maybe 3-4 matches onces a week. he suck at chess
          tbh. he has wining probability of 50% in chess against same ranked
          oponent but still plays.
        </p>
      </div>
      <div className="px-6 ">
        <div className="text-[18px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mt-2">
          <br />

          <p className="font-bold">
            mostly plays Bullet - very fast-paced 1-minute games that require
            intense focus and quick decision making.
          </p>
          <br />
          <p>
            <span className="text-black font-bold">bullet rating 📈 </span> :{" "}
            <span className="font-bold text-green-500">
              {userData.perfs.bullet.rating} (in {userData.perfs.bullet.games}{" "}
              games)
            </span>
          </p>
          {/*<p>
            <span className="text-black font-bold">Blitz rating 📈</span>:{" "}
            {userData.perfs.blitz.rating}
            (in {userData.perfs.blitz.games} games)
          </p>
          <br />
          
          */}

          <p>
            <span className="text-black font-bold">last game played on</span>:{" "}
            {formatTimestamp(userData.seenAt)} ({timeAgo(userData.seenAt)})
          </p>
          <p className="mt-4">
            <span className="text-black font-bold">total play time</span>:{" "}
            {(userData.playTime.total / 3600).toFixed(2)} hours
          </p>
        </div>

        <RatingChart games={recentGames} username={userData.username} />
        <p className="mt-4">
          <span className="text-black font-bold">total games played</span>:{" "}
          {userData.count.all}
        </p>
        <p className="mt-4">
          <span className="text-black font-bold">wins</span>:{" "}
          {userData.count.win} (
          {((userData.count.win / userData.count.all) * 100).toFixed(2)}%)
        </p>
        <p>
          <span className="text-black font-bold">losses</span>:{" "}
          {userData.count.loss} (
          {((userData.count.loss / userData.count.all) * 100).toFixed(2)}
          %)
        </p>
        <p>
          <span className="text-black font-bold">draws</span>:{" "}
          {userData.count.draw} (
          {((userData.count.draw / userData.count.all) * 100).toFixed(2)}
          %)
        </p>

        <Link href={userData.url} target="_blank" rel="noreferrer">
          <p className="text-blue-500 my-4 cursor-pointer hover:underline">
            {userData.username} - on lichess
          </p>
        </Link>
      </div>
      <div className="mt-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-4 py-2 tablet:w-full mobile:w-full  text-gray-500 mx-auto">
        <p>message from him:</p>
        <div className="bg-[#0B82FE] text-white p-4 rounded-3xl mt-2">
          <p>
            I measure my focus by playing chess. The number of blunders I make
            shows exactly how focused I am that day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChessStats;
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
