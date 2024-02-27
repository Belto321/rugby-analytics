import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiGoogleanalytics } from "react-icons/si";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rugby Analytics",
  description: "Trak your rugby team performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-28 bg-blue-50 flex justify-between items-center">       
          <div className="ml-20 flex flex-row items-end text-blue-700 text-4xl">
            <SiGoogleanalytics className="mb-1 text-4xl"/>
            <h1 className="text-5xl font-bold"> R</h1>
            <h3 className="text-3xl font-bold text-end"> ugby Analytics</h3>
          </div>
          <div className="mr-20 flex flex-row items-center space-x-12 text-blue-700 font-bold text-xl">
            <Link href="/newgame">
            <h4>New Game</h4>
            </Link>
            <Link href="/games">
            <h4>Games</h4>
            </Link>
            <Link href="/team">
            <h4>Team</h4>
            </Link>
            <h4>Analytics</h4>
            <h4>Dates</h4>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
              Sign In
            </button>
            

          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
