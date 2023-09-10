-- CreateTable
CREATE TABLE "Facc" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Facc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vulgo" TEXT NOT NULL,
    "mae" TEXT NOT NULL,
    "faccId" INTEGER NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Facc_name_key" ON "Facc"("name");

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_faccId_fkey" FOREIGN KEY ("faccId") REFERENCES "Facc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
