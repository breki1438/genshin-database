/*
  Warnings:

  - Added the required column `type` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weapon" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "baseATK" INTEGER NOT NULL,
    "secondStat" TEXT NOT NULL,
    "secondStatValue" TEXT NOT NULL,
    "passive" TEXT NOT NULL,
    "passiveDescription" TEXT NOT NULL
);
INSERT INTO "new_Weapon" ("baseATK", "name", "passive", "passiveDescription", "secondStat", "secondStatValue") SELECT "baseATK", "name", "passive", "passiveDescription", "secondStat", "secondStatValue" FROM "Weapon";
DROP TABLE "Weapon";
ALTER TABLE "new_Weapon" RENAME TO "Weapon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
