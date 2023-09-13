/*
  Warnings:

  - You are about to drop the column `reatedAt` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventoId` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pai` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pessoa" ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "eventoId" INTEGER NOT NULL,
ADD COLUMN     "foto" TEXT NOT NULL,
ADD COLUMN     "pai" TEXT NOT NULL,
ADD COLUMN     "rg" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "reatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "relato" TEXT NOT NULL,
    "ufc" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
