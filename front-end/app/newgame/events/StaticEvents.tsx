
    import { useForm, Controller } from 'react-hook-form';
    import Select from 'react-select';
    import { EventTypesType, PlayersType } from './page';


    type FormDataType = {
        gameHalf: true | false;
        player: { value: string; label: string };
        event: { value: string; label: string };
    }

    type PropsType = {
      players: PlayersType[] | undefined
      eventTypes: EventTypesType[] | undefined
      gameId: { id: string } | undefined
      half: boolean
  }

    type FormattedDataType = {
        gameHalf: true | false;
        player: string
        event: number
    }
    
    export function StaticEvents({ gameId, players, eventTypes, half }: PropsType){
      const numberGameId = Number(gameId?.id)
      const { register, handleSubmit, control } = useForm<FormDataType>();
    
      const onSubmit = async (data: FormDataType) => {
        //TODO validar el form no empty
        const res = await fetch("http://localhost:3101/event", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            gameId: numberGameId, 
            playerId: data.player.value, 
            eventTypeId: Number(data.event.value), 
            half: half
          })
        })
        console.log(res)
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="mb-4">
            <div className="flex items-center">
            <input
                type="checkbox"
                id="gameHalfSwitch"
                {...register('gameHalf')}
                defaultChecked // Shown by default in the first half
                className="mr-2 h-6 w-6 border-gray-300 rounded-md focus:ring-indigo-500"
            />
            <label htmlFor="gameHalfSwitch" className="text-sm font-medium text-gray-700">
                First Half
            </label>
            </div>
          </div>
    
          <div className="mb-4">
            <label htmlFor="player" className="block text-sm font-medium text-gray-700">
              Player
            </label>
            <Controller
              name="player"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={players?.map(option => ({ value: option.name, label: option.name }))}
                  className="mt-1 w-full"
                  placeholder="Select a player"
                />
              )}
            />
          </div>
    
          <div className="mb-4">
            <label htmlFor="event" className="block text-sm font-medium text-gray-700">
              Event
            </label>
            <Controller
              name="event"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={eventTypes?.map(option => ({ value: option.id.toString(), label: option.name }))}
                  className="mt-1 w-full"
                  placeholder="Select an event"
                />
              )}
            />
          </div>
    
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      );
    };   