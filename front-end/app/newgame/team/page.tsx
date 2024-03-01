import TeamForm from "./team";

export type PlayersType = {
  name: string
}
type ParamsType = {
  searchParams?: {
    id: string;
  };
}
export const dynamic = 'force-dynamic'

async function getPlayers(): Promise<PlayersType[] | undefined>{
  try{
  const response = await fetch('http://localhost:3101/players')
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const players = await response.json()
  return players
}catch(error){
  console.log(error)
}
}

export default async function index({searchParams}: ParamsType){
  const players = await getPlayers()
  const gameId = Number(searchParams?.id)
  return (
    <TeamForm players={players} gameId={gameId}/>
  )
}