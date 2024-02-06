import TeamForm from "./team";

export type PlayersType = {
  id: number
  name: string
  number: number
  position: number
}
type ParamsType = {
  searchParams?: {
    id: string;
  };
}

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
  return (
    <TeamForm players={players} gameId={searchParams}/>
  )
}