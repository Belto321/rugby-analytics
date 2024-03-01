import { Controller, useForm } from "react-hook-form";
import Select from 'react-select';
import { AllPlayersType, PlayersType } from "./page";
import { useRouter } from "next/navigation";

type PropType = {
    playersOn: PlayersType[] | undefined
    gameId: number
    allPlayers: AllPlayersType[] | undefined
    half: boolean
}
type FormType = {
    playerIn: string
    playerOut: string
    position: number
    number: number
}

export function PlayerChange({ gameId, playersOn, allPlayers, half }: PropType){
    console.log(gameId)
    const { control, handleSubmit } = useForm<FormType>();

    const router = useRouter()

    async function onSubmit(data: FormType){
      console.log(gameId)
      const response = await fetch("http://localhost:3101/gameplayer/change", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: gameId, 
          playerOut: data.playerOut,
          playerIn: data.playerIn, 
          number: Number(data.number),
          position: Number(data.position),
          half: half
        })
      })
      if(response.ok){
        router.refresh()
      }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-fit bg-gray-100 p-4 rounded-lg border border-gray-300 space-y-2">
          <div>
            <p>Player Out:</p>
            <Controller
              name={`playerOut`}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <Select
                  {...field}
                  options={playersOn}
                  getOptionLabel={(option) => option.playerId}
                  getOptionValue={(option) => {return option.playerId}}
                  isSearchable
                  placeholder="Select Player"
                  onChange={(selectedOption) => field.onChange(selectedOption?.playerId)}
                  value={playersOn?.find((player) => player.playerId === field.value)} 
                />
              )}
            />
          </div>
          <div>
            <p>Player In:</p>
            <Controller
              name={`playerIn`}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <Select
                  {...field}
                  options={allPlayers}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => {return option.name}}
                  isSearchable
                  placeholder="Select Player"
                  onChange={(selectedOption) => field.onChange(selectedOption?.name)}
                  value={allPlayers?.find((player) => player.name === field.value)} 
                />
              )}
            />
          </div>
          <div>
            <p>Position:</p>
            <Controller
              name={`position`}
              control={control}
              defaultValue={0}
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
            <p>Number:</p>         
            <Controller
              name={`number`}
              control={control}
              defaultValue={0}
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
          <button type="submit" className="col-span-3 md:col-span-5 lg:col-span-5 bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Submit
      </button>
        </div>
        </form>
    )
}