/*
  Warnings:

  - You are about to drop the `_AlbumToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ToDoToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ToDo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AlbumToUser" DROP CONSTRAINT "_AlbumToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToUser" DROP CONSTRAINT "_AlbumToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_ToDoToUser" DROP CONSTRAINT "_ToDoToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ToDoToUser" DROP CONSTRAINT "_ToDoToUser_B_fkey";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ToDo" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AlbumToUser";

-- DropTable
DROP TABLE "_ToDoToUser";

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
