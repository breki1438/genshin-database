-- CreateTable
CREATE TABLE "TalentParameters" (
    "id" SERIAL NOT NULL,
    "talentId" INTEGER NOT NULL,
    "parameterName" TEXT NOT NULL,
    "lv1" TEXT NOT NULL,
    "lv2" TEXT NOT NULL,
    "lv3" TEXT NOT NULL,
    "lv4" TEXT NOT NULL,
    "lv5" TEXT NOT NULL,
    "lv6" TEXT NOT NULL,
    "lv7" TEXT NOT NULL,
    "lv8" TEXT NOT NULL,
    "lv9" TEXT NOT NULL,
    "lv10" TEXT NOT NULL,
    "lv11" TEXT NOT NULL,
    "lv12" TEXT NOT NULL,
    "lv13" TEXT NOT NULL,
    "lv14" TEXT NOT NULL,
    "lv15" TEXT NOT NULL,

    CONSTRAINT "TalentParameters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TalentParameters" ADD CONSTRAINT "TalentParameters_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "CharacterTalents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
