import { EventForm } from "./EventForm";

type ParamsType = {
    searchParams: {
      id: string;
    };
  }
  type GamePlayersType = {
     id: string 
  }
  export type AllPlayersType = {
    name: string
  }

  export type PlayersType = {
    gameId: number
    playerId: string
    number: number
    position: number
  }

  export type EventTypesType = {
    id: number
    name: string
    subType: number
    score: number
  }

  export const dynamic = 'force-dynamic'

  async function getPlayers( gameId : GamePlayersType): Promise<PlayersType[] | undefined>{
    try{
    const response = await fetch(`http://localhost:3101/gameplayer/${gameId?.id}`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const players = await response.json()
    return players
  }catch(error){
    console.log(error)
  }
  }

  async function getAllPlayers(): Promise<AllPlayersType[] | undefined> {
    try{
      const response = await fetch('http://localhost:3101/players')
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const allPlayers = response.json()
      return allPlayers
    }catch(error){
      console.log(error)
    }
  }

  async function getEventTypes(): Promise<EventTypesType[] | undefined> {
    try{
      const response = await fetch('http://localhost:3101/eventtype')
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const eventTypes = response.json()
      return eventTypes
    }catch(error){
      console.log(error)
    }
  }



export default async function Events({searchParams}: ParamsType){
  const players = await getPlayers(searchParams)
  const allPlayers = await getAllPlayers()
  const eventTypes = await getEventTypes()
  const gameId = Number(searchParams?.id)
    return(
        <EventForm 
          gameId={gameId} 
          players={players} 
          eventTypes={eventTypes} 
          allPlayers={allPlayers}
        />
    )
}