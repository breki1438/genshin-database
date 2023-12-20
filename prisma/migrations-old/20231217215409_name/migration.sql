-- CreateTable
CREATE TABLE "Weapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "idPostaci" INTEGER NOT NULL,
    CONSTRAINT "Weapon_idPostaci_fkey" FOREIGN KEY ("idPostaci") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
