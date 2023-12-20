-- CreateTable
CREATE TABLE "CharacterArtifactStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characterName" TEXT NOT NULL,
    "flower" TEXT NOT NULL,
    "plume" TEXT NOT NULL,
    "sands" TEXT NOT NULL,
    "goblet" TEXT NOT NULL,
    "circlet" TEXT NOT NULL,
    "subStats" TEXT NOT NULL,
    "build" TEXT NOT NULL,
    CONSTRAINT "CharacterArtifactStats_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
