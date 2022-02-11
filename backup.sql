-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: pia
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
  `expiration_date` varchar(255) NOT NULL,
  `vehicle` varchar(255) NOT NULL,
  `owner_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `auto_policy_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `policy_owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto_policy`
--

LOCK TABLES `auto_policy` WRITE;
/*!40000 ALTER TABLE `auto_policy` DISABLE KEYS */;
INSERT INTO `auto_policy` VALUES (1,'GEICO',599,987654321,'2022-12-31 00:00:00','Ford',1,'2022-02-09 15:51:24','2022-02-11 14:44:18'),(2,'State Farm',750,7654321,'2022-12-31','Dodge',2,'2022-02-09 15:51:24','2022-02-09 15:51:24'),(3,'GEICO',999,236876541,'2022-12-31 00:00:00','Truck',1,'2022-02-10 03:01:53','2022-02-10 03:01:53'),(4,'GEICO',456,345567,'2022-12-31 00:00:00','Truck',2,'2022-02-10 03:03:17','2022-02-10 03:03:17'),(5,'GEICO',3587,3258745,'2022-12-31 00:00:00','Truck',4,'2022-02-11 00:04:49','2022-02-11 00:04:49');
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
  `expiration_date` varchar(255) NOT NULL,
  `property_address` varchar(255) NOT NULL,
  `owner_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `homeowners_policy_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `policy_owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homeowners_policy`
--

LOCK TABLES `homeowners_policy` WRITE;
/*!40000 ALTER TABLE `homeowners_policy` DISABLE KEYS */;
INSERT INTO `homeowners_policy` VALUES (1,'GEICO',800,'0123456','2022-12-31','456 Main St',2,'2022-02-09 15:51:24','2022-02-09 15:51:24'),(2,'Progressive',1599,'123456789','2022-12-31 00:00:00','123 Main St',1,'2022-02-09 15:51:24','2022-02-11 14:28:02'),(3,'USAA',3456,'876765653543','2022-12-31 00:00:00','123 South Main',2,'2022-02-10 14:24:02','2022-02-10 14:24:02');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policy_owner`
--

LOCK TABLES `policy_owner` WRITE;
/*!40000 ALTER TABLE `policy_owner` DISABLE KEYS */;
INSERT INTO `policy_owner` VALUES (1,'Robert','Clarady','robert@pia.com','robert','$2b$10$YRpU8aE34YqAPOx3SqxOluWtqhCq1Z/pGv9fG6mffkzuqQKK.RLWG',1,1),(2,'Tom','Thumb','tom@pia.com','tom','$2b$10$6HaHIQreOxYSUTK7W/PgpOIBtfu1c9zXXuBEZci2YTAff4nV4.5..',1,0),(3,'Fred','Flinstone','fred@pia.com','fred','$2b$10$MnEjZmrZg7K0jMHevn4HpO4Nj71Ei..EYBrTVxpF5NsZCt12GrAyq',1,0),(4,'Jane','Doe','doe@pia.com','jane','$2b$10$4EkUBqyBRiq6Laj3CRPF4ubCeAZCcPWL.m/aNfX5pWANubOYTOrla',1,0);
/*!40000 ALTER TABLE `policy_owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('iCHVTsmCHmad9N0N6d6P0XWJivrFzWIE','2022-02-12 17:01:12','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":1,\"username\":\"robert\",\"admin\":true,\"loggedIn\":true}','2022-02-10 19:23:44','2022-02-11 17:01:12'),('mi6EUOICsyKzaq8YVRkbb9LcfCqnODR_','2022-02-12 14:17:56','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 14:17:56','2022-02-11 14:17:56'),('PFb73KW_12JhL34iQbqt7d7Oili4ga8c','2022-02-12 14:37:40','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 14:18:13','2022-02-11 14:37:40'),('XTEWug2CHyj9th8IVL-m3oLv53eLxFdR','2022-02-12 14:16:04','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-02-11 14:16:04','2022-02-11 14:16:04');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-11 11:55:05
