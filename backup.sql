-- MySQL dump 10.13  Distrib 8.0.27, for macos12.0 (arm64)
--
-- Host: localhost    Database: PIA
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auto_policy`
--

DROP TABLE IF EXISTS `auto_policy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auto_policy` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `annual_premium` int NOT NULL,
  `policy_number` int NOT NULL,
  `expiration_date` datetime NOT NULL,
  `vehicle` varchar(255) NOT NULL,
  `owner_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `auto_policy_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `policy_owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto_policy`
--

LOCK TABLES `auto_policy` WRITE;
/*!40000 ALTER TABLE `auto_policy` DISABLE KEYS */;
INSERT INTO `auto_policy` VALUES (1,'Germania',1100,987654321,'2022-12-31 00:00:00','Chevy',3,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(2,'Travelers',800,7654321,'2022-12-31 00:00:00','BMW',3,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(3,'General',399,987654321,'2022-12-31 00:00:00','Ford',1,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(4,'State Farm',750,7654321,'2022-12-31 00:00:00','Dodge',2,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(5,'State Auto',679,987654321,'2022-12-31 00:00:00','Honda',4,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(6,'State Auto',750,7654321,'2022-12-31 00:00:00','Dodge',4,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(7,'Progressive',567,987654321,'2022-12-31 00:00:00','Jeep',5,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(8,'Germania',1000,7654321,'2022-12-31 00:00:00','BWM',6,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(9,'Germania',1001,987654321,'2022-12-31 00:00:00','Chevy',6,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(10,'Germania',890,7654321,'2022-12-31 00:00:00','Volkswagon',6,'2022-02-11 05:35:47','2022-02-11 05:35:47');
/*!40000 ALTER TABLE `auto_policy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homeowners_policy`
--

DROP TABLE IF EXISTS `homeowners_policy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homeowners_policy` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `annual_premium` int NOT NULL,
  `policy_number` varchar(255) NOT NULL,
  `expiration_date` datetime NOT NULL,
  `property_address` varchar(255) NOT NULL,
  `owner_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `homeowners_policy_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `policy_owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homeowners_policy`
--

LOCK TABLES `homeowners_policy` WRITE;
/*!40000 ALTER TABLE `homeowners_policy` DISABLE KEYS */;
INSERT INTO `homeowners_policy` VALUES (1,'GEICO',800,'0123456','2022-12-31 00:00:00','456 Main St',2,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(2,'Progressive',599,'123456789','2022-12-31 00:00:00','123 Main St',1,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(3,'GEICO',2100,'0123456','2022-12-31 00:00:00','456 Main St',3,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(4,'Progressive',759,'123456789','2022-12-31 00:00:00','123 Main St',3,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(5,'Nationwide',13000,'123456789','2022-12-31 00:00:00','123 Main St',1,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(6,'GEICO',1900,'0123456','2022-12-31 00:00:00','456 Main St',4,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(7,'Progressive',20,'123456789','2022-12-31 00:00:00','123 Main St',5,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(8,'GEICO',900,'0123456','2022-12-31 00:00:00','456 Main St',6,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(9,'Germania',1200,'0123456','2022-12-31 00:00:00','456 Main St',6,'2022-02-11 05:35:47','2022-02-11 05:35:47'),(10,'Travelers',380,'123456789','2022-12-31 00:00:00','123 Main St',6,'2022-02-11 05:35:47','2022-02-11 05:35:47');
/*!40000 ALTER TABLE `homeowners_policy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policy_owner`
--

DROP TABLE IF EXISTS `policy_owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policy_owner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `policy_owner` tinyint(1) NOT NULL DEFAULT '1',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policy_owner`
--

LOCK TABLES `policy_owner` WRITE;
/*!40000 ALTER TABLE `policy_owner` DISABLE KEYS */;
INSERT INTO `policy_owner` VALUES (1,'Tom','Thumb','tom@pia.com','tom','$2b$10$KWnEoQporqCdEvZi3lV2mexoKLCB76rz9RqW4MNltJ9nGfV3Fxicu',1,0),(2,'Timmy','Turner','tim@email.com','timmy','$2b$10$zgF.LaoF7UT.bOwjVurMieyzGUpY/JSoHAn6eyq8aaglrkqvn7FjG',1,1),(3,'Kate','Wilson','Kate@email.com','Kate','$2b$10$lxo.TPotuBDnfQRM2/FTauZkJ.DD/w8obuVgzrI6TTmEWgBZSURH2',1,0),(4,'Robert','Clarady','robert@pia.com','robert','$2b$10$yBdRu1Q15QsKl03emXP0f.3D7Y3ICjLWJqmY1mb9X7YrRbdqYhWCy',1,1),(5,'Stella','Clarkson','stelly@email.com','Stelly','$2b$10$7mf3E7Skl4fpqkHmDWrbOee8iAC/RWfRpJ1ltxdbwftWF5nJrgT0m',1,1),(6,'Ethan','Jackson','ethan@email.com','ethan','$2b$10$jPHLPQXaiMPnlkVCWnkPPeke.PQhFqis6a145QISHdbMBCn8Lh7tS',1,1),(10,'dd','dd','dd@me.com','dd','$2b$10$9kr203ZNbj3XfKa03rfCV.pXy3fsAmfNU2wXtMi/Lwxwac3OPPGKe',1,0),(11,'ll','ll','ll@me.com','ll','$2b$10$/e0eXfHMd3WKy6YdMNEnaOiZpEyjTFF9gb/6DO03zsWohainKcMKS',1,0),(12,'fg','fg','fg@me.com','fg','$2b$10$.Mtxh4tqPdw2dm9v9ttg7OmGk0qyHaN8ni2B2WuveWRVOXFLCIQnq',1,0),(13,'jerry','stinemod','jerry@me/com','jerry','$2b$10$AOWU.qvw3R8ut4DIt79TguRd9XDY2mUzsEIc0hD2gDAawVQOSPaHG',1,0),(14,'hey','hey','hey@me.com','hey','$2b$10$Yud3M3PRPmeXq6rvNwBObehRY08aT0nG42eTwP9ftDiS.EvJoeQfi',1,0),(15,'aa','aa','aa@me.com','aa','$2b$10$jWPacxSckc6qFvv4uTp3VOo6RDcXwAduExQggkM5TiG0.DkbjtVuG',1,1),(16,'Ethan','Shipman','Shippingstaion@email.com','shipman','$2b$10$9o6MfIuDb0EfPeimuwXRfOkwdWdfVbLSRB3O7Cu96Oz4.DqHrcz9m',1,1),(17,'david','young','david@email.com','david','$2b$10$7jiNfOIyRnSTFhhLxmh.0OjDgYt6ofDcsXHFdtEaLer1UP4EZqkvi',1,0),(18,'sarah','sarah','sarah@email.com','sarah','$2b$10$17rIO7jE/1o7xq72nTMla.ojOy9WZ1tCmhsufe3xpPaqI5KPiGLKi',1,1);
/*!40000 ALTER TABLE `policy_owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('_hF5WQp6dZeReakI9eNA-yMUthwdbQ-O','2022-02-12 05:49:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 05:49:05','2022-02-11 05:49:05'),('_jrpQNduKjSbXJ5AHeTKfXswhaISuFMl','2022-02-12 06:01:46','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:01:46','2022-02-11 06:01:46'),('2I-SHl8RQAJPoiKDBHwEbjPfh4fpNvOF','2022-02-12 05:49:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 05:49:05','2022-02-11 05:49:05'),('46HaxckRZKsQDuVfkLJGBVPZjT6vLHwE','2022-02-12 15:59:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 15:59:49','2022-02-11 15:59:49'),('64ckYUCbiHvZ1WxGClGnATs-Nv6a8Ofc','2022-02-12 06:01:46','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:01:46','2022-02-11 06:01:46'),('6yHb02BLcascoBzRzO7eDqr0u4D-YBT1','2022-02-12 06:14:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:14:21','2022-02-11 06:14:22'),('7bcWTGZNuhL4Lw0UdtSCpsb_qCp8JSn9','2022-02-12 15:59:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 15:59:49','2022-02-11 15:59:49'),('8HpmIsFak4BWDf2DDsOAJnitvo5f7K8p','2022-02-12 05:49:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 05:49:05','2022-02-11 05:49:05'),('97d784k-zUL-mSBM2VlM0beNvPoyDxfe','2022-02-12 15:59:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 15:59:49','2022-02-11 15:59:49'),('aMVZfFoc4VnQDmXwjpdMXXFe7Ex_b74O','2022-02-13 17:12:25','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":18,\"username\":\"sarah\",\"admin\":true,\"loggedIn\":true}','2022-02-12 17:08:57','2022-02-12 17:12:25'),('aq0dRdu15kcjHgepYCL7LGahKj1_cDG_','2022-02-12 15:59:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 15:59:49','2022-02-11 15:59:49'),('Av-OyWfjCN7h3H5tuVIdsUsr8ZMvQCzi','2022-02-12 06:00:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:00:49','2022-02-11 06:00:49'),('aWi4LZytz5MW5iekp11ClRs3hMH0OFNp','2022-02-12 06:14:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:14:21','2022-02-11 06:14:22'),('b-xN-Zik4xxd3ZwzpEauPKP15Kn2WqWa','2022-02-12 06:12:55','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:07:04','2022-02-11 06:12:55'),('b4FC9ztfqUZh8Q-Rpum0xcK0STzO85sg','2022-02-12 06:12:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:12:34','2022-02-11 06:12:34'),('BcNY-okwOip-zd7u2QZBF2MPnH0QWv88','2022-02-12 06:09:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:45','2022-02-11 06:09:45'),('bZ8mbnQ2rAWE-JgqvMkOtpeOffJCSS42','2022-02-12 05:49:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 05:49:05','2022-02-11 05:49:05'),('Cq-pvqzm6CYbKSwPjjZh5EApSLH88tjK','2022-02-12 06:22:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:22:34','2022-02-11 06:22:34'),('d6gIdVP-D-bSKf4dpsvc3btgll47gFAI','2022-02-12 06:09:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:01','2022-02-11 06:09:01'),('eqoVjCLbN4lvpwtlWLrrsCZGHim-hhI3','2022-02-12 06:16:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:16:26','2022-02-11 06:16:26'),('EVUs8GsHDdKAz827Yq4U5KDJ7uCCOgE_','2022-02-12 06:09:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:01','2022-02-11 06:09:01'),('FQQeMvmbbRXSQm__BWpPkRYlwbuewfBb','2022-02-12 06:22:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:22:34','2022-02-11 06:22:34'),('HGA0-Tjpu2pYkwOYqPL4kYW0148INxhg','2022-02-12 06:01:46','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:01:46','2022-02-11 06:01:46'),('Hx6s3tcmYQ_yr-9BRGF2_Jdamfv_IfPy','2022-02-12 06:01:46','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:01:46','2022-02-11 06:01:46'),('iQAauE1GJALzusMf_YBw4xzyDirSUbKu','2022-02-12 15:59:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 15:59:49','2022-02-11 15:59:49'),('J-qhhAz-R4ZCIG0G3wI7v0JML0JXXBnu','2022-02-12 06:09:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:01','2022-02-11 06:09:01'),('JX3SYQNzi6FL0ZbbP77p3f4omGxCUhkH','2022-02-12 06:22:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:22:34','2022-02-11 06:22:34'),('k3XBhjEzieggff_hSbcbScQnNPBSKK_M','2022-02-12 06:09:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:45','2022-02-11 06:09:45'),('kOejsQdyaX1u1Yh3l6BJnjxV2vTM2lxK','2022-02-12 06:22:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:22:34','2022-02-11 06:22:34'),('le5fMW2or76np9xMwKDQx3PC4VSQYtO9','2022-02-12 06:09:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:45','2022-02-11 06:09:45'),('LXsEKr_eOnT59jjov5kfGymX12I5tV_9','2022-02-12 06:14:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:14:22','2022-02-11 06:14:22'),('miHxBLFC1m2VYuV3mHJD5bTsrz0oX3Hd','2022-02-12 06:12:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:12:34','2022-02-11 06:12:34'),('MnpmMh5S2d9XJVS0zLDdmBvPLoglDqj7','2022-02-12 06:16:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:16:26','2022-02-11 06:16:26'),('nIaHTRT7XTEVgf2AD8DKUs9ofizCBYNE','2022-02-12 06:14:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:14:22','2022-02-11 06:14:22'),('nXAmuUebaVkE0Nw-6s-r2Lqt6XpW7HdP','2022-02-12 06:00:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:00:49','2022-02-11 06:00:49'),('o0pPpw_E_c86DuG0EuoiFdFcDp-oZ4PB','2022-02-12 06:09:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:01','2022-02-11 06:09:01'),('ohp_p4duRhKPbCf51C_VBiNMch1aADea','2022-02-12 06:00:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:00:49','2022-02-11 06:00:49'),('OKspjuKkuoQQUry6L27hjlby9X1nx76j','2022-02-12 06:53:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":15,\"username\":\"aa\",\"admin\":true,\"loggedIn\":true}','2022-02-11 06:22:34','2022-02-11 06:53:57'),('PgmahhS8mJSeVgMwdE0wl_edD5aRHqP4','2022-02-12 06:16:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:16:26','2022-02-11 06:16:26'),('QC9f_waqnKntrbo8TXptsEx06N4IanRb','2022-02-12 05:49:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 05:49:05','2022-02-11 05:49:05'),('QT_8iieOueW7MCKyt59xfloL2it-7txf','2022-02-12 06:16:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:16:26','2022-02-11 06:16:26'),('qUSteUU52q9ggE-PBdo_1pW7mu__ir4L','2022-02-12 06:09:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:01','2022-02-11 06:09:01'),('sngOPNIQDzEesRZ6S0VVekoAHvhlEbpy','2022-02-12 06:12:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:12:34','2022-02-11 06:12:34'),('SRDXuuy4_UU3Gndcrkr7rC5UfBa2c4nm','2022-02-12 06:12:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:12:34','2022-02-11 06:12:34'),('Ss8A1z0QxAYFy9INF6OvanAICfV2gcSc','2022-02-12 06:09:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:45','2022-02-11 06:09:45'),('SuB9aYJVOVxVQVHDa1sLxPOI2xNpVnuT','2022-02-12 06:22:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:22:34','2022-02-11 06:22:34'),('u-Wsja4M_vWXUU9wwtnj531c5R1W5XT2','2022-02-12 06:09:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:09:45','2022-02-11 06:09:45'),('UJ8Rmsgxv1YP7BS9IYkMruqTeI8NJZbx','2022-02-12 06:00:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:00:49','2022-02-11 06:00:49'),('V6bh3y8lG5oAX4_Ux0J257y7GQ-fbzip','2022-02-12 06:16:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:16:26','2022-02-11 06:16:26'),('wdp0N1c7Z5Z-V1ZpeS0AfCGpmyjjQMc5','2022-02-12 06:12:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:12:34','2022-02-11 06:12:34'),('y_UKHzSeGc-1kFmZXnfk5eooEbrfUsM2','2022-02-12 06:14:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:14:22','2022-02-11 06:14:22'),('yaffZC0GJIRiKI8E_GG5PMxd5eGwJaCi','2022-02-12 06:01:46','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:01:46','2022-02-11 06:01:46'),('ZfwaXrqsjbpmk8cICGWYfzM0zfjHjFsj','2022-02-12 05:49:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 05:49:05','2022-02-11 05:49:05'),('zHi0ccpobfHtA4TJmdu9wQlbkexBkmne','2022-02-12 06:00:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 06:00:49','2022-02-11 06:00:49'),('ZV-sJ2KqKAaKsWiZYNbb1I_wl7ZfiQhU','2022-02-12 16:03:02','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 15:59:49','2022-02-11 16:03:02');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-12 11:25:42
