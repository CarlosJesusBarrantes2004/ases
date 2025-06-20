-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProjectImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProjectImage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProjectImage" ("createdAt", "id", "projectId", "url") SELECT "createdAt", "id", "projectId", "url" FROM "ProjectImage";
DROP TABLE "ProjectImage";
ALTER TABLE "new_ProjectImage" RENAME TO "ProjectImage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
