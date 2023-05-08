/*
  Warnings:

  - A unique constraint covering the columns `[idAuthor,name]` on the table `Deck` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Deck_idAuthor_name_key` ON `Deck`(`idAuthor`, `name`);
