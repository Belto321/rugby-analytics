
    import { useForm, Controller } from 'react-hook-form';
    import Select from 'react-select';
    import { DescriptionType, EventTypesType, PlayersType } from './page';
import { useEffect, useState } from 'react';


    type FormDataType = {
        gameHalf: true | false;
        player: { value: string; label: string };
        event: { value: string; label: string };
        place: { value: string; label: string };
        description: { value: string; label: string };
        result: boolean
    }

    type PropsType = {
      players: PlayersType[] | undefined
      eventTypes: EventTypesType[] | undefined
      gameId: number
      half: boolean
      descriptions: DescriptionType[] | undefined
  }
    
    export function StaticEvents({ gameId, players, eventTypes, half, descriptions }: PropsType){
      const { handleSubmit, control, setValue, watch, reset } = useForm<FormDataType>();
      const [filteredDescriptions, setFilteredDescriptions] = useState<{value: string, label: string}[]>()

      const eventValue = watch('event');

      useEffect(() => {
        if (eventValue) {
          const filteredOptions = descriptions?.filter(desc => desc.eventTypeId === Number(eventValue.value))
            .map(option => ({ value: option.id.toString(), label: option.description }));
          setFilteredDescriptions(filteredOptions);
        }
      }, [eventValue]);
    
      const onSubmit = async (data: FormDataType) => {
        //TODO validar el form no empty
        const res = await fetch("http://localhost:3101/event", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            gameId: gameId, 
            playerId: data.player.value, 
            eventTypeId: Number(data.event.value), 
            half: half,
            description: Number(data.description?.value),
            place: data.place?.value,
            result: data.result
          })
        })
        reset()
        console.log(res)
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
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
                  options={players?.map(option => ({ value: option.playerId, label: option.playerId }))}
                  className="mt-1 w-full"
                  placeholder="Select a player"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              name="result"
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <button 
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setValue('result', !field.value)}>
                  {field.value ? "Positive" : "Negative"}
                </button>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Place" className="block text-sm font-medium text-gray-700">
              Place
            </label>
            <Controller
              name="place"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={['Extreme defense', 'Our 22', 'Mid field', 'Their 22', 'Extreme Attack'].map(option => ({ value: option, label: option }))}
                  className="mt-1 w-full"
                  placeholder="Select the pleace"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Place" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={filteredDescriptions}
                  className="mt-1 w-full"
                  placeholder="Select the pleace"
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