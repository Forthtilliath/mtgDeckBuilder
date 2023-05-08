/*
  Warnings:

  - Added the required column `count` to the `CardInDeck` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CardInDeck` ADD COLUMN `count` INTEGER NOT NULL;
