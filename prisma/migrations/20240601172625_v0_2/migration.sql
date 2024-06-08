/*
  Warnings:

  - You are about to drop the `_CategoryToTask` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `taskId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_authorId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToTask" DROP CONSTRAINT "_CategoryToTask_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToTask" DROP CONSTRAINT "_CategoryToTask_B_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "taskId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CategoryToTask";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
