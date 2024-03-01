"use client"
import Link from "next/link"
import { Game } from "./page";

type PropsTypes = {
    games: Game[]
}

async function downloader(game: Game) {
    try {
      const response = await fetch(`http://localhost:3101/export-csv/game/${game.id}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${game.date}${game.division}${game.id}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  }

export function GamesCards({games}: PropsTypes){
    return(
        <div className="grid grid-cols-4 gap-3">
        {games.map((game) => (
            <div key={game.id} className="m-3 border-4 border-blue-400 rounded-md p-4 text-center text-lg">
                <p className="font-bold mb-2">{game.date}</p>
                <p><span className="font-bold">Place: </span>{game.place}</p>
                <p><span className="font-bold">Opponent: </span>{game.opponent}</p>
                <p><span className="font-bold">Division: </span>{game.division}</p>
                <Link href={`/newgame/events?id=${game.id}`}>
                <p className=" text-blue-500 italic">View Game</p>
                </Link>
                <button onClick={() => downloader(game)}
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Download</button>
            </div>
        ))}
        </div>
        
        )
}