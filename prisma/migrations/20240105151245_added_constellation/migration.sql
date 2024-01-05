-- CreateTable
CREATE TABLE "CharacterConstellations" (
    "id" SERIAL NOT NULL,
    "characterName" TEXT NOT NULL,
    "constellationName" TEXT NOT NULL,
    "constellationDescription" TEXT NOT NULL,

    CONSTRAINT "CharacterConstellations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CharacterConstellations" ADD CONSTRAINT "CharacterConstellations_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
