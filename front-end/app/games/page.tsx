import { GamesCards } from "./gamesCards";

export interface Game {
    id: number;
    date: string;
    place: string;
    opponent: string;
    division: string;
  }

  export const dynamic = 'force-dynamic'


async function getGames(){
    try{
        const res = await fetch('http://localhost:3101/games')
        const games = await res.json()
        console.log(games)
        return games
    }catch(error){
        console.log(error)
    }
}

export default async function Games(){
    const games: Game[] = await getGames()

    return (
        <GamesCards games={games} />
    )
    
}