/*
  Warnings:

  - You are about to drop the `gamePlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "gamePlayer" DROP CONSTRAINT "gamePlayer_gameId_fkey";

-- DropForeignKey
ALTER TABLE "gamePlayer" DROP CONSTRAINT "gamePlayer_playerId_fkey";

-- DropTable
DROP TABLE "gamePlayer";

-- CreateTable
CREATE TABLE "gameplayer" (
    "gameId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "gameplayer_pkey" PRIMARY KEY ("gameId","playerId")
);

-- AddForeignKey
ALTER TABLE "gameplayer" ADD CONSTRAINT "gameplayer_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gameplayer" ADD CONSTRAINT "gameplayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
