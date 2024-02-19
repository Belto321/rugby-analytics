/*
  Warnings:

  - You are about to drop the `eventType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "eventType";

-- CreateTable
CREATE TABLE "eventtype" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subType" INTEGER NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "eventtype_pkey" PRIMARY KEY ("id")
);
