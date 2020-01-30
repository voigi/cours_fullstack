-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : database
-- Généré le : jeu. 30 jan. 2020 à 09:00
-- Version du serveur :  8.0.19
-- Version de PHP : 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blogger`
--
CREATE DATABASE IF NOT EXISTS `blogger` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blogger`;

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `article_id` smallint UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `teaser` text,
  `content` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` tinyint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `article_has_category`
--

CREATE TABLE `article_has_category` (
  `article_id` smallint UNSIGNED NOT NULL,
  `category_id` smallint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `category_id` smallint UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `comment_id` smallint UNSIGNED NOT NULL,
  `text` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `article_id` smallint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `like`
--

CREATE TABLE `like` (
  `user_id` int UNSIGNED NOT NULL,
  `article_id` smallint UNSIGNED NOT NULL,
  `state` tinyint DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `permission`
--

CREATE TABLE `permission` (
  `permission_id` smallint UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `role_id` tinyint UNSIGNED NOT NULL,
  `name` varchar(70) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `role_has_permission`
--

CREATE TABLE `role_has_permission` (
  `role_id` tinyint UNSIGNED NOT NULL,
  `permission_id` smallint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `status`
--

CREATE TABLE `status` (
  `status_id` tinyint UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int UNSIGNED NOT NULL,
  `email` varchar(120) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user_has_role`
--

CREATE TABLE `user_has_role` (
  `user_id` int UNSIGNED NOT NULL,
  `role_id` tinyint UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_id`),
  ADD KEY `fk_article_status_idx` (`status_id`),
  ADD KEY `fk_article_user1_idx` (`user_id`);

--
-- Index pour la table `article_has_category`
--
ALTER TABLE `article_has_category`
  ADD PRIMARY KEY (`article_id`,`category_id`),
  ADD KEY `fk_article_has_category_category1_idx` (`category_id`),
  ADD KEY `fk_article_has_category_article1_idx` (`article_id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `fk_comment_article1_idx` (`article_id`),
  ADD KEY `fk_comment_user1_idx` (`user_id`);

--
-- Index pour la table `like`
--
ALTER TABLE `like`
  ADD PRIMARY KEY (`user_id`,`article_id`),
  ADD KEY `fk_user_has_article_article1_idx` (`article_id`),
  ADD KEY `fk_user_has_article_user1_idx` (`user_id`);

--
-- Index pour la table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`permission_id`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Index pour la table `role_has_permission`
--
ALTER TABLE `role_has_permission`
  ADD PRIMARY KEY (`role_id`,`permission_id`),
  ADD KEY `fk_role_has_permission_permission1_idx` (`permission_id`),
  ADD KEY `fk_role_has_permission_role1_idx` (`role_id`);

--
-- Index pour la table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Index pour la table `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `fk_user_has_role_role1_idx` (`role_id`),
  ADD KEY `fk_user_has_role_user1_idx` (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `article_id` smallint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` smallint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` smallint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `permission`
--
ALTER TABLE `permission`
  MODIFY `permission_id` smallint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `status`
--
ALTER TABLE `status`
  MODIFY `status_id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `fk_article_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`),
  ADD CONSTRAINT `fk_article_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Contraintes pour la table `article_has_category`
--
ALTER TABLE `article_has_category`
  ADD CONSTRAINT `fk_article_has_category_article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`),
  ADD CONSTRAINT `fk_article_has_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`),
  ADD CONSTRAINT `fk_comment_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Contraintes pour la table `like`
--
ALTER TABLE `like`
  ADD CONSTRAINT `fk_user_has_article_article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`),
  ADD CONSTRAINT `fk_user_has_article_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Contraintes pour la table `role_has_permission`
--
ALTER TABLE `role_has_permission`
  ADD CONSTRAINT `fk_role_has_permission_permission1` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`permission_id`),
  ADD CONSTRAINT `fk_role_has_permission_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

--
-- Contraintes pour la table `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD CONSTRAINT `fk_user_has_role_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `fk_user_has_role_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
