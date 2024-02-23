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

      function handleHalfChange(e: ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        const value = e.target.value === 'true';
        setHalf(value);
      }
    
      return (
        <div className="mt-8 mx-36 flex flex-row justify-between">
          <div className="flex items-center">
            <input
                type="checkbox"
                id="gameHalfSwitch"
                onChange={(e) => handleHalfChange(e)}
                defaultChecked // Shown by default in the first half
                className="mr-2 h-6 w-6 border-gray-300 rounded-md focus:ring-indigo-500"
            />
            <label htmlFor="gameHalfSwitch" className="text-sm font-medium text-gray-700">
                First Half
            </label>
            </div>
        <GameEvents players={players} gameId={numberGameId} half={half}/>
        <StaticEvents gameId={gameId} players={players} eventTypes={eventTypes} half={half}/>
        </div>
      );
    };    