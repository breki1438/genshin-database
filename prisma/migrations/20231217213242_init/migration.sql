-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "url" TEXT NOT NULL
);
