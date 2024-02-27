import Link from "next/link"

interface Game {
    id: number;
    date: string;
    place: string;
    opponent: string;
    division: string;
  }

async function getGames(){
    try{
        const res = await fetch('http://localhost:3101/games')
        const games = await res.json()
        return games
    }catch(error){
        console.log(error)
    }
}

export default async function Games(){
    const games = await getGames()
    return(
        <div className="grid grid-cols-4 gap-3">
        {games.map((game: Game) => (
        <>
            <Link href={`/newgame/events?id=${game.id}`}>
            <div key={game.id} className="m-3 border-4 border-blue-400 rounded-md p-4 text-center text-lg">
                <p className="font-bold mb-2">{game.date}</p>
                <p><span className="font-bold">Place: </span>{game.place}</p>
                <p><span className="font-bold">Opponent: </span>{game.opponent}</p>
                <p><span className="font-bold">Division: </span>{game.division}</p>
            </div>
            </Link>
        </>
        ))}
        </div>
        
        )
}