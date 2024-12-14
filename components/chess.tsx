import Link from "next/link";

function ChessStats() {
  const chessStats = {
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
  };
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
            Bullet rating in {chessStats.perfs.bullet.games} games📈:{" "}
            {chessStats.perfs.bullet.rating}
          </p>
          <p>
            Blitz rating in {chessStats.perfs.blitz.games} games📈:{" "}
            {chessStats.perfs.blitz.rating}
          </p>
          <br />

          <p>Total games played: {chessStats.count.all}</p>
          <p>
            Wins: {chessStats.count.win} -{" "}
            {((chessStats.count.win / chessStats.count.all) * 100).toFixed(2)}%
          </p>
          <p>
            Losses: {chessStats.count.loss} -{" "}
            {((chessStats.count.loss / chessStats.count.all) * 100).toFixed(2)}%
          </p>
          <p>
            Draws: {chessStats.count.draw} -{" "}
            {((chessStats.count.draw / chessStats.count.all) * 100).toFixed(2)}%
          </p>
          <p>
            Total play time: {(chessStats.playTime.total / 3600).toFixed(2)}{" "}
            hours
          </p>
        </div>
        <Link href={chessStats.url} target="_blank" rel="noreferrer">
          <p className="text-blue-500 my-4 cursor-pointer hover:underline">
            {chessStats.username} - on lichess
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

export default ChessStats;
