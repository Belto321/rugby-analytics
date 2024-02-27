"use client"
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { PlayersType } from "./page";
import { useRouter } from "next/navigation";


type PropsType = {
    players: PlayersType[] | undefined
    gameId: { id: string } | undefined
}

type DataType = {
  validPlayers: PlayersType[]
}

export default function TeamForm({ players, gameId }: PropsType) {
    const router = useRouter()
    const numberGameId = Number(gameId?.id)
    let validPlayers: PlayersType[]
    if(!players){
        validPlayers = [{id: 0, name: "Player", number: 0, position: 0}]
    }else{
        validPlayers = players
    }
    const { control, handleSubmit, register } = useForm<PlayersType[]>();
    
  
    const onSubmit = async ({...data}: PlayersType[] ) => {
      console.log(data)
      const response = fetch('http://localhost:3101/gameplayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({gameId: numberGameId, players: data.players})
      })
      console.log(response)
      router.push(`/newgame/events?id=${numberGameId}`)
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 p-4">
      {Array.from({ length: 15 }, (_, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg border border-gray-300 space-y-2">
          <div>
            <p>Position:</p>
            <Controller
              name={`players.${index}.position` as `${number}.position`}
              control={control}
              defaultValue={index + 1}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder="Position"
                  className="text-gray-600 w-full mt-2"
                />
              )}
              />
          </div>
          <div>
            <p>Player:</p>
            <Controller
              name={`players.${index}.name` as const}
              control={control}
              defaultValue={validPlayers[index].name}
              render={({ field }) => (
                <Select
                  {...field}
                  options={players}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => {return option.name}}
                  isSearchable
                  placeholder="Select Player"
                  onChange={(selectedOption) => field.onChange(selectedOption?.name)}
                  value={validPlayers.find((player) => player.name === field.value)} 
                />
              )}
            />
          </div>
          <div>
            <p>Number:</p>         
            <Controller
              name={`players[${index}].number` as `${number}.number`}
              control={control}
              defaultValue={validPlayers[index].number}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder="Number"
                  className="text-gray-600 w-full mt-2"
                />
              )}
            />
          </div>
        </div>
      ))}
      <button type="submit" className="col-span-3 md:col-span-5 lg:col-span-5 bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Submit
      </button>
    </form>
  );
};
