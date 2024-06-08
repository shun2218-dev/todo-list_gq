/*
  Warnings:

  - You are about to drop the column `isDone` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "isDone",
ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;
