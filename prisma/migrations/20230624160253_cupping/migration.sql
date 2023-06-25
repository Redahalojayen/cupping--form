-- CreateTable
CREATE TABLE "Cupping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sampleName" TEXT NOT NULL,
    "roastLevel" REAL NOT NULL,
    "fragranceAroma" REAL NOT NULL,
    "flavor" REAL NOT NULL,
    "afterTaste" REAL NOT NULL,
    "acidity" REAL NOT NULL,
    "body" REAL NOT NULL,
    "balance" REAL NOT NULL,
    "uniformity" INTEGER NOT NULL,
    "cleanCup" INTEGER NOT NULL,
    "sweetness" INTEGER NOT NULL,
    "overall" REAL NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
