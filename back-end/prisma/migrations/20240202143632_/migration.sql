/*
  Warnings:

  - The primary key for the `gameplayer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `players` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `players` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `players` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "gameplayer" DROP CONSTRAINT "gameplayer_playerId_fkey";

-- AlterTable
ALTER TABLE "gameplayer" DROP CONSTRAINT "gameplayer_pkey",
ALTER COLUMN "playerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "gameplayer_pkey" PRIMARY KEY ("gameId", "playerId");

-- AlterTable
ALTER TABLE "players" DROP CONSTRAINT "players_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "players_pkey" PRIMARY KEY ("name");

-- CreateIndex
CREATE UNIQUE INDEX "players_name_key" ON "players"("name");

-- AddForeignKey
ALTER TABLE "gameplayer" ADD CONSTRAINT "gameplayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
