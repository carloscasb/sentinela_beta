-- CreateTable
CREATE TABLE "Organ" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Organ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acesso" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Acesso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organ_name_key" ON "Organ"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Acesso_title_key" ON "Acesso"("title");
