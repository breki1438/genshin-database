-- CreateTable
CREATE TABLE "CharacterTalents" (
    "id" SERIAL NOT NULL,
    "characterName" TEXT NOT NULL,
    "talentType" TEXT NOT NULL,
    "talentName" TEXT NOT NULL,
    "talentDesciprtion" TEXT NOT NULL,

    CONSTRAINT "CharacterTalents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CharacterTalents" ADD CONSTRAINT "CharacterTalents_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
