import Image from "next/image";
import Link from "next/link";

export function Home(){
    return(
        <div className="mx-20 flex flex-row justify-between items-center">
            <div className="text-2xl font-bold space-y-8 text-blue-700">
                <h2 className="text-3xl text-center">Start analizing your rugby games</h2>
                <h2>{"“You can't improve what you don't measure.”"}</h2>
                <Link href="/newgame">
                    <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
                    Start new game
                    </button>
                </Link>
            </div>
            <div>
                <Image 
                    src={'/images/rugbyFeild.webp'} 
                    alt=""
                    width={1200}
                    height={900}
                />
            </div>
        </div>
    )
}