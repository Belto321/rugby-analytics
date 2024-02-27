'use client'
import { useState, ChangeEvent } from 'react';
import { EventTypesType, PlayersType } from './page';
import { GameEvents } from './GameEvents';
import { StaticEvents } from './StaticEvents';

type PropsType = {
  players: PlayersType[] | undefined
  eventTypes: EventTypesType[] | undefined
  gameId: { id: string } | undefined
}


export function EventForm({ gameId, players, eventTypes }: PropsType){
  const numberGameId = Number(gameId?.id)
  const [ half, setHalf ] = useState(true)

  function handleHalfChange(e: ChangeEvent<HTMLSelectElement>){
    e.preventDefault()
    const value = e.target.value === 'true';
    setHalf(value);
    console.log(value)
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
        <GameEvents players={players} gameId={numberGameId} half={half}/>
        <StaticEvents gameId={gameId} players={players} eventTypes={eventTypes} half={half}/>
        </div>
      </div>
    );
  };    