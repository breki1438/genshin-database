-- CreateTable
CREATE TABLE "Parameters" (
    "id" SERIAL NOT NULL,
    "talentId" INTEGER NOT NULL,
    "parameterName" TEXT NOT NULL,

    CONSTRAINT "Parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParameterValues" (
    "id" SERIAL NOT NULL,
    "parameterId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ParameterValues_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Parameters" ADD CONSTRAINT "Parameters_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "CharacterTalents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParameterValues" ADD CONSTRAINT "ParameterValues_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "Parameters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
