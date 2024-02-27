"use client"
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  playerName: string;
  position: string;
  number: number;
};

export function TeamForm(){
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [players, setPlayers ] = useState()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch('http://localhost:3101/players', {
      method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.playerName,
          })
    })
    const players = await response.json()
    setPlayers(players)
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">Player Name</label>
        <input type="text" id="playerName" {...register('playerName', { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        {errors.playerName && <span className="text-red-500">Player Name is required</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
    </form>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {players?.map((player) => (
        <div key={player.id} className="bg-white border border-gray-200 rounded-md p-4 shadow-md">
          <h2 className="text-lg font-semibold">{player.name}</h2>
        </div>
      ))}
    </div>
    </div>
  );
}