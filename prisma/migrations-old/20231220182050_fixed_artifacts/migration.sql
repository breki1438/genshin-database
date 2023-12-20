/*
  Warnings:

  - You are about to drop the column `weaponName` on the `CharacterArtifactSets` table. All the data in the column will be lost.
  - Added the required column `artifactName` to the `CharacterArtifactSets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CharacterArtifactSets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characterName" TEXT NOT NULL,
    "artifactName" TEXT NOT NULL,
    CONSTRAINT "CharacterArtifactSets_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterArtifactSets_artifactName_fkey" FOREIGN KEY ("artifactName") REFERENCES "Artifacts" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterArtifactSets" ("characterName", "id") SELECT "characterName", "id" FROM "CharacterArtifactSets";
DROP TABLE "CharacterArtifactSets";
ALTER TABLE "new_CharacterArtifactSets" RENAME TO "CharacterArtifactSets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
