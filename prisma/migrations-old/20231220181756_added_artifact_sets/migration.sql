-- CreateTable
CREATE TABLE "Artifacts" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "twoPiece" TEXT NOT NULL,
    "fourPiece" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CharacterArtifactSets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characterName" TEXT NOT NULL,
    "weaponName" TEXT NOT NULL,
    CONSTRAINT "CharacterArtifactSets_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterArtifactSets_weaponName_fkey" FOREIGN KEY ("weaponName") REFERENCES "Artifacts" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
