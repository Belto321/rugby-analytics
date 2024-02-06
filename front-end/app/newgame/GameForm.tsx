"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";
import { InputWithValidation } from "@/components/inputWithValidation";
import { useRouter } from "next/navigation";


const newGameSchema = z.object({
    date: z.string().min(1).max(50),
    place: z.string().min(1).max(50),
    opponent: z.string().min(1).max(50),
    local: z.string().min(1).max(50),
    division: z.string().min(1).max(50),
})

type GameFormType = z.infer<typeof newGameSchema>
type response = {
    id: number
    date: string
    place: string
    opponent: string
    local: string
    division: string
}
export function GameForm(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<GameFormType>({
        resolver: zodResolver(newGameSchema)
      })

      const router = useRouter()
      const onSubmit = async (data : GameFormType) => {
        const response = await fetch('http://localhost:3101/newgame', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        const team = await response.json()
        console.log(team)
        router.push(`/newgame/team?id=${team.id}`)
      }
    return(
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <InputWithValidation error={errors.date}>
            <input
              {...register("date")}
              type="date"
              className="w-full border-2 border-gray-300 p-2 rounded-md"
            />
            </InputWithValidation>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Place
            </label>
            <InputWithValidation error={errors.place}>
            <input
              {...register("place")}
              type="text"
              className="w-full border-2 border-gray-300 p-2 rounded-md"
            />
            </InputWithValidation>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Opponent
            </label>
            <InputWithValidation error={errors.opponent}>
            <input
              {...register("opponent")}
              type="text"
              className="w-full border-2 border-gray-300 p-2 rounded-md"
            />
            </InputWithValidation>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Division
            </label>
            <InputWithValidation error={errors.opponent}>
            <input
              {...register("division")}
              type="text"
              className="w-full border-2 border-gray-300 p-2 rounded-md"
            />
            </InputWithValidation>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <select
              {...register("local")}
              className="w-full border-2 border-gray-300 p-2 rounded-md"
            >
              <option value="local">Local</option>
              <option value="visitant">Visitant</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </form>
      </div>
    )
}