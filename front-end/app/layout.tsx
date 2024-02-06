import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="w-full h-28 bg-blue-50 flex justify-center content-center">
          <h1 className="text-5xl font-bold text-blue-700 text-center"> Rugby Analytics</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
