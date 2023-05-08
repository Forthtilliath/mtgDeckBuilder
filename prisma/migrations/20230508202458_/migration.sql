/*
  Warnings:

  - You are about to drop the `CardsInDecks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CardsInDecks` DROP FOREIGN KEY `CardsInDecks_idCard_fkey`;

-- DropForeignKey
ALTER TABLE `CardsInDecks` DROP FOREIGN KEY `CardsInDecks_idDeck_fkey`;

-- DropTable
DROP TABLE `CardsInDecks`;

-- CreateTable
CREATE TABLE `CardInDeck` (
    `idCard` INTEGER NOT NULL,
    `idDeck` INTEGER NOT NULL,

    PRIMARY KEY (`idCard`, `idDeck`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CardInDeck` ADD CONSTRAINT `CardInDeck_idCard_fkey` FOREIGN KEY (`idCard`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardInDeck` ADD CONSTRAINT `CardInDeck_idDeck_fkey` FOREIGN KEY (`idDeck`) REFERENCES `Deck`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
