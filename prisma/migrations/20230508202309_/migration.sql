-- CreateTable
CREATE TABLE `CardsInDecks` (
    `idCard` INTEGER NOT NULL,
    `idDeck` INTEGER NOT NULL,

    PRIMARY KEY (`idCard`, `idDeck`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CardsInDecks` ADD CONSTRAINT `CardsInDecks_idCard_fkey` FOREIGN KEY (`idCard`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardsInDecks` ADD CONSTRAINT `CardsInDecks_idDeck_fkey` FOREIGN KEY (`idDeck`) REFERENCES `Deck`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
