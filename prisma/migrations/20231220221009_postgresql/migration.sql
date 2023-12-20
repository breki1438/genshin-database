-- CreateTable
CREATE TABLE "Character" (
    "name" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "element" TEXT NOT NULL,
    "weaponType" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "book" TEXT NOT NULL,
    "weeklyBoss" TEXT NOT NULL,
    "crystal" TEXT NOT NULL,
    "bossMaterial" TEXT NOT NULL,
    "localSpeciality" TEXT NOT NULL,
    "enemyDrop" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "name" TEXT NOT NULL,
    "stars" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "baseATK" INTEGER NOT NULL,
    "secondStat" TEXT NOT NULL,
    "secondStatValue" TEXT NOT NULL,
    "passive" TEXT NOT NULL,
    "passiveDescription" TEXT NOT NULL,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "CharacterWeapons" (
    "id" SERIAL NOT NULL,
    "characterName" TEXT NOT NULL,
    "weaponName" TEXT NOT NULL,
    "build" TEXT,

    CONSTRAINT "CharacterWeapons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterArtifactStats" (
    "id" SERIAL NOT NULL,
    "characterName" TEXT NOT NULL,
    "flower" TEXT NOT NULL,
    "plume" TEXT NOT NULL,
    "sands" TEXT NOT NULL,
    "goblet" TEXT NOT NULL,
    "circlet" TEXT NOT NULL,
    "subStats" TEXT NOT NULL,
    "build" TEXT NOT NULL,

    CONSTRAINT "CharacterArtifactStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artifacts" (
    "name" TEXT NOT NULL,
    "twoPiece" TEXT NOT NULL,
    "fourPiece" TEXT NOT NULL,

    CONSTRAINT "Artifacts_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "CharacterArtifactSets" (
    "id" SERIAL NOT NULL,
    "characterName" TEXT NOT NULL,
    "artifactName" TEXT NOT NULL,
    "build" TEXT NOT NULL,

    CONSTRAINT "CharacterArtifactSets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CharacterWeapons" ADD CONSTRAINT "CharacterWeapons_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterWeapons" ADD CONSTRAINT "CharacterWeapons_weaponName_fkey" FOREIGN KEY ("weaponName") REFERENCES "Weapon"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterArtifactStats" ADD CONSTRAINT "CharacterArtifactStats_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterArtifactSets" ADD CONSTRAINT "CharacterArtifactSets_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterArtifactSets" ADD CONSTRAINT "CharacterArtifactSets_artifactName_fkey" FOREIGN KEY ("artifactName") REFERENCES "Artifacts"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
