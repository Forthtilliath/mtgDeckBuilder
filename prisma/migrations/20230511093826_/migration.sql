-- CreateTable
CREATE TABLE `Card` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(64) NOT NULL,
    `name` VARCHAR(64) NOT NULL,

    UNIQUE INDEX `uuid_UNIQUE`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deck` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `idAuthor` INTEGER NOT NULL,

    INDEX `Deck_idAuthor_fkey`(`idAuthor`),
    UNIQUE INDEX `Deck_idAuthor_name_key`(`idAuthor`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CardInDeck` (
    `idCard` INTEGER NOT NULL,
    `idDeck` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,

    INDEX `CardInDeck_idDeck_fkey`(`idDeck`),
    PRIMARY KEY (`idCard`, `idDeck`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(128) NOT NULL,
    `displayName` VARCHAR(32) NOT NULL,
    `password` VARCHAR(64) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Deck` ADD CONSTRAINT `Deck_idAuthor_fkey` FOREIGN KEY (`idAuthor`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardInDeck` ADD CONSTRAINT `CardInDeck_idCard_fkey` FOREIGN KEY (`idCard`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardInDeck` ADD CONSTRAINT `CardInDeck_idDeck_fkey` FOREIGN KEY (`idDeck`) REFERENCES `Deck`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Initial User
INSERT INTO `User` (email, displayName, password) VALUES ('forth@pouet.it', 'Forth', 'secret')