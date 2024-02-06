/*
  Warnings:

  - You are about to drop the `gamePlayers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "gamePlayers" DROP CONSTRAINT "gamePlayers_gameId_fkey";

-- DropForeignKey
ALTER TABLE "gamePlayers" DROP CONSTRAINT "gamePlayers_playerId_fkey";

-- DropTable
DROP TABLE "gamePlayers";

-- CreateTable
CREATE TABLE "gamePlayer" (
    "gameId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "gamePlayer_pkey" PRIMARY KEY ("gameId","playerId")
);

-- AddForeignKey
ALTER TABLE "gamePlayer" ADD CONSTRAINT "gamePlayer_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gamePlayer" ADD CONSTRAINT "gamePlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
