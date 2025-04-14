"use client";

import { ArrowBigDownDash, ArrowBigUp } from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Game {
  id: string;
  createdAt: number;
  perf: string;
  winner: string;
  status: string;
  white: {
    name: string;
    rating: number;
    ratingDiff: number;
  };
  black: {
    name: string;
    rating: number;
    ratingDiff: number;
  };
}

interface Props {
  games: Game[];
  username: string;
}

export default function RatingChart({ games, username }: Props) {
  const reversedGames = [...games].reverse();

  const data = reversedGames.map((game, index) => {
    const isWhite = game.white.name.toLowerCase() === username.toLowerCase();
    const yourRating = isWhite ? game.white.rating : game.black.rating;
    const opponentRating = isWhite ? game.black.rating : game.white.rating;

    const result =
      (game.winner === "white" && isWhite) ||
      (game.winner === "black" && !isWhite)
        ? "Win"
        : game.winner === null
        ? "Draw"
        : "Loss";

    const method = game.status ?? "unknown";
    return {
      game: `Game ${index + 1}`,
      yourRating: yourRating,
      opponentRating,
      method,
      result,
      yourRatingDiff: isWhite ? game.white.ratingDiff : game.black.ratingDiff,
      opponentRatingDiff: isWhite
        ? game.black.ratingDiff
        : game.white.ratingDiff,
    };
  });
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload?.length) {
      const { yourRating, method, result, yourRatingDiff } = payload[0].payload;

      return (
        <div className="bg-white border p-2 rounded shadow text-sm">
          <p className="font-semibold">Game {label + 1}</p>
          <p>
            rating: {yourRating}
            <span
              className={
                yourRatingDiff >= 0 ? "text-green-600" : "text-red-500"
              }
            >
              {" "}
              ({yourRatingDiff >= 0 ? "+" : ""}
              {yourRatingDiff})
            </span>
            {yourRatingDiff >= 0 ? (
              <ArrowBigUp className="inline-block h-4 w-4 ml-1 text-green-600" />
            ) : (
              <ArrowBigDownDash className="inline-block h-4 w-4 ml-1 text-red-500" />
            )}
          </p>

          <p>method: {method}</p>

          <p
            className={`font-medium ${
              result === "Win"
                ? "text-green-600"
                : result === "Loss"
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          >
            result: {result}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-gray-100 pr-8 pb-8 rounded-xl">
      <h2 className="text-lg font-semibold my-4 pt-4 pb-8 text-black mx-4">
        last 20 games rating chart:
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="                " tick={{ fontSize: 10 }} />
          <YAxis
            domain={["auto", "auto"]}
            fontSize={10}
            tick={{ fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="yourRating"
            name="Your Rating"
            stroke="#64758C"
            strokeWidth={1.5}
            dot={({ cx, cy, payload }: any) => {
              let fill = "#4f46e5";
              if (payload.result === "Win") fill = "#16a34a"; // green
              else if (payload.result === "Loss") fill = "#dc2626"; // red
              else if (payload.result === "Draw") fill = "#facc15"; // yellow

              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill={fill}
                  stroke="#64758C"
                  strokeWidth={1}
                />
              );
            }}
          />
          {/* <Line
            type="monotone"
            dataKey="opponentRating"
            name="Opponent Rating"
            stroke="#9ca3af"
            strokeDasharray="5 5"
          /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
