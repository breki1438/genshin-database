/*
  Warnings:

  - The primary key for the `Weapon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Weapon` table. All the data in the column will be lost.
  - You are about to drop the column `idPostaci` on the `Weapon` table. All the data in the column will be lost.
  - The primary key for the `Character` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Character` table. All the data in the column will be lost.
  - Added the required column `baseATK` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passive` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passiveDescription` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondStat` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondStatValue` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "CharacterWeapons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "characterName" TEXT NOT NULL,
    "weaponName" TEXT NOT NULL,
    CONSTRAINT "CharacterWeapons_characterName_fkey" FOREIGN KEY ("characterName") REFERENCES "Character" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterWeapons_weaponName_fkey" FOREIGN KEY ("weaponName") REFERENCES "Weapon" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weapon" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "baseATK" INTEGER NOT NULL,
    "secondStat" TEXT NOT NULL,
    "secondStatValue" TEXT NOT NULL,
    "passive" TEXT NOT NULL,
    "passiveDescription" TEXT NOT NULL
);
INSERT INTO "new_Weapon" ("name") SELECT "name" FROM "Weapon";
DROP TABLE "Weapon";
ALTER TABLE "new_Weapon" RENAME TO "Weapon";
CREATE TABLE "new_Character" (
    "name" TEXT NOT NULL PRIMARY KEY,
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
    "url" TEXT NOT NULL
);
INSERT INTO "new_Character" ("book", "bossMaterial", "crystal", "description", "element", "enemyDrop", "localSpeciality", "name", "region", "stars", "url", "weaponType", "weeklyBoss") SELECT "book", "bossMaterial", "crystal", "description", "element", "enemyDrop", "localSpeciality", "name", "region", "stars", "url", "weaponType", "weeklyBoss" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
