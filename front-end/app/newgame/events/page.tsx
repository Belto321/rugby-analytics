import { EventForm } from "./EventForm";

type ParamsType = {
    searchParams?: {
      id: string;
    };
  }

  export type PlayersType = {
    id: number
    name: string
    number: number
    position: number
  }

  export type EventTypesType = {
    id: number
    name: string
    subType: number
    score: number
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
  const players = await getPlayers()
  const eventTypes = await getEventTypes()
    return(
        <EventForm gameId={searchParams} players={players} eventTypes={eventTypes} />
    )
}