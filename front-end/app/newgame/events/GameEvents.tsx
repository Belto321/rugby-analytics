import { useState } from "react";
import { PlayersType } from "./page";

type PropType = {
    players: PlayersType[] | undefined
    gameId: number
    half: boolean
}

export function GameEvents({ players, gameId, half }: PropType){

    const [ totalValues, setTotalValues ] = useState({
        totalTackles: 0,
        totalPasses: 0
    })

    if(!players) return;

    async function clickHandler(eventType: number, name: string){
        const response = await fetch("http://localhost:3101/event", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              gameId: gameId, 
              playerId: name, 
              eventTypeId: eventType, 
              half: half
            })
          })
        const res = await response.json()
        setTotalValues(res)
    }
    return(
        <div className="p-4">
            <div className="flex justify-center text-xl font-bold mb-4">
                <p className="mr-4">Total Tackles: {totalValues.totalTackles}</p>
                <p>Total Passes: {totalValues.totalPasses}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {players?.map((player) => (
                    <div key={player.id} className="bg-gray-100 rounded-lg p-4">
                        <div className="text-lg font-semibold mb-2">{player.name}</div>
                        <div className="flex justify-between">
                            <button
                                onClick={() => clickHandler(1, player.name)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Tackle
                            </button>
                            <button
                                onClick={() => clickHandler(2, player.name)}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Pass
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}