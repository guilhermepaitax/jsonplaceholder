/*
  Warnings:

  - You are about to drop the column `bs` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "bs",
ADD COLUMN     "catchPhrase" TEXT;
