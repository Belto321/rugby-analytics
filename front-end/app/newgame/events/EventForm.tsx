'use client'
import { useState, ChangeEvent } from 'react';
import { AllPlayersType, EventTypesType, PlayersType } from './page';
import { GameEvents } from './GameEvents';
import { StaticEvents } from './StaticEvents';
import { PlayerChange } from './PlayerChange';

type PropsType = {
  players: PlayersType[] | undefined
  eventTypes: EventTypesType[] | undefined
  gameId: number
  allPlayers: AllPlayersType[] | undefined
}


export function EventForm({ gameId, players, eventTypes, allPlayers }: PropsType){
  const [ half, setHalf ] = useState(true)
  const [ change, setChange ] = useState(false)

  function handleHalfChange(e: ChangeEvent<HTMLSelectElement>){
    e.preventDefault()
    const value = e.target.value === 'true';
    setHalf(value);
    }
    
    return (
      <div>
        <div className="flex justify-center items-center">
          <select
            onChange={(e) => handleHalfChange(e)}
            value={half.toString()}
            className="mt-2 h-8 px-6 border-3 border-gray-300 rounded-md"
          >
            <option value="true">First Half</option>
            <option value="false">Second Half</option> 
          </select>
        </div>
        <div className="mt-8 mx-36 flex flex-row-reverse justify-between">
        <GameEvents players={players} gameId={gameId} half={half}/>
        <StaticEvents gameId={gameId} players={players} eventTypes={eventTypes} half={half}/>
        </div>
        <div className='mt-8 flex !justify-center flex-col'>
          <button onClick={()=> setChange(!change)}
            className="w-fit px-4 py-2 border rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Change Player</button>
        {change ? (
          <PlayerChange gameId={gameId} playersOn={players} allPlayers={allPlayers} half={half} />
         ) : null }
        </div>
      </div>
    );
  };    