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
            <div className="mb-2 flex justify-center">
                            <button
                                    onClick={() => clickHandler(5, "Team")}
                                    className="m-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Attack
                            </button>
                            <button
                                    onClick={() => clickHandler(10, "Team")}
                                    className="m-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Ruck
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => clickHandler(3, "Team")}
                                className="m-1  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Tackle
                            </button>
                            <button
                                onClick={() => clickHandler(1, "Team")}
                                className="m-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Pass
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => clickHandler(4, "Team")}
                                className="m-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Miss Tackle
                            </button>
                            <button
                                onClick={() => clickHandler(2, 'Team')}
                                className="m-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Miss Pass
                            </button>
                        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {players?.map((player, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4">
                        <div className="flex flex-row space-x-3 text-lg font-semibold mb-2">
                            <p>{player.playerId}</p>
                            <p>P {player.position}</p>
                            <p>N {player.number}</p>
                        </div>
                        <div className="flex justify-center">
                            <button
                                    onClick={() => clickHandler(5, player.playerId)}
                                    className="m-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Attack
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={() => clickHandler(3, player.playerId)}
                                className="m-1  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Tackle
                            </button>
                            <button
                                onClick={() => clickHandler(1, player.playerId)}
                                className="m-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Pass
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={() => clickHandler(4, player.playerId)}
                                className="m-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Miss Tackle
                            </button>
                            <button
                                onClick={() => clickHandler(2, player.playerId)}
                                className="m-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                + Miss Pass
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}