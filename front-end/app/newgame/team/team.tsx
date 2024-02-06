"use client"
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { PlayersType } from "./page";

type PropsType = {
    players: PlayersType[] | undefined
    gameId: { id: string } | undefined
}

export default function TeamForm({ players, gameId }: PropsType) {
    const numberGameId = Number(gameId?.id)
    console.log(numberGameId)
    let validPlayers: PlayersType[]
    if(!players){
        validPlayers = [{id: 0, name: "Player", number: 0, position: 0}]
    }else{
        validPlayers = players
    }
    const { control, handleSubmit, register } = useForm<PlayersType[]>({
      defaultValues: validPlayers
    });

    
  
    const onSubmit = async (data:  PlayersType[] ) => {
      const response = fetch('http://localhost:3101/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({gameId: numberGameId, players: data.validPlayers})
      })
      console.log(response)
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 p-4">
      {Array.from({ length: 15 }, (_, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg border border-gray-300 space-y-2">
          <div>
            <p>Position: {index + 1 }</p>
          </div>
          <div>
            <p>Player:</p>
            <Controller
              name={`validPlayers[${index}].name` as `${number}.name`}
              control={control}
              defaultValue={validPlayers[index].name}
              render={({ field }) => (
                <Select
                  {...field}
                  options={validPlayers}
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
              name={`validPlayers[${index}].number` as `${number}.number`}
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