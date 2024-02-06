import Link from "next/link";

export function Home(){
    return(
        <div>
            <Link href="/newgame">
                Start New Game
            </Link>
        </div>
    )
}