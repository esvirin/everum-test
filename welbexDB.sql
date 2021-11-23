CREATE DATABASE  IF NOT EXISTS `welbex` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `welbex`;
-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: welbex
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `distance` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'2021-05-12','idontknow',500,3000),(2,'2021-05-12','idontknow',500,3000),(3,'2021-05-12','idontknow',500,3000),(4,'2021-05-12','idontknow',500,3000),(5,'2021-05-12','idontknow',500,3000),(6,'2021-05-12','idontknow',500,3000),(7,'2021-05-12','idontknow',500,3000),(8,'2021-05-12','idontknow',500,3000),(9,'2021-05-12','idontknow',500,3000),(10,'2021-05-12','idontknow',500,3000),(11,'2021-05-12','idontknow',500,3000),(12,'2021-05-12','idontknow',500,3000),(13,'2021-05-12','idontknow',500,3000),(14,'2021-05-12','idontknow',500,3000),(15,'2021-05-12','idontknow',500,3000),(16,'2021-05-12','idontknow',500,3000),(17,'2021-05-12','idontknow',500,3000),(18,'2021-05-12','idontknow',500,3000),(19,'2021-05-12','idontknow',500,3000),(20,'2021-05-12','idontknow',500,3000),(21,'2021-05-12','idontknow',500,3000),(22,'2021-05-12','idontknow',500,3000),(23,'2021-05-12','idontknow',500,3000),(24,'2021-05-12','idontknow',500,3000),(25,'2021-05-12','idontknow',500,3000),(26,'2021-05-12','idontknow',500,3000),(27,'2021-05-12','idontknow',500,3000),(28,'2021-05-12','idontknow',500,3000),(29,'2021-05-12','idontknow',500,3000),(30,'2021-05-12','idontknow',500,3000),(31,'2021-05-12','idontknow',500,3000),(32,'2021-05-12','idontknow',500,3000),(33,'2021-05-12','idontknow',500,3000),(34,'2021-05-12','idontknow',500,3000),(35,'2021-05-12','idontknow',500,3000),(36,'2021-05-12','idontknow',500,3000),(37,'2021-05-12','idontknow',500,3000),(38,'2021-05-12','idontknow',500,3000),(39,'2021-05-12','idontknow',500,3000),(40,'2021-05-12','idontknow',500,3000),(41,'2021-05-12','idontknow',500,3000),(42,'2021-05-12','idontknow',500,3000),(43,'2021-05-12','idontknow',500,3000),(44,'2021-05-12','idontknow',500,3000),(45,'2021-05-12','idontknow',500,3000),(46,'2021-05-12','idontknow',500,3000),(47,'2021-05-12','idontknow',500,3000),(48,'2021-05-12','idontknow',500,3000),(49,'2021-05-12','idontknow',500,3000),(50,'2021-05-12','idontknow',500,3000),(51,'2021-05-12','idontknow',500,3000),(52,'2021-05-12','idontknow',500,3000),(53,'2021-05-12','idontknow',500,3000),(54,'2021-05-12','idontknow',500,3000),(55,'2021-05-12','idontknow',500,3000),(56,'2021-05-12','idontknow',500,3000),(57,'2021-05-12','idontknow',500,3000),(58,'2021-05-12','idontknow',500,3000),(59,'2021-05-12','idontknow',500,3000),(60,'2021-05-12','idontknow',500,3000),(61,'2021-05-12','idontknow',500,3000),(62,'2021-05-12','idontknow',500,3000),(63,'2021-05-12','idontknow',500,3000),(64,'2021-05-12','idontknow',500,3000),(65,'2021-05-12','idontknow',500,3000),(66,'2021-05-12','idontknow',500,3000),(67,'2021-05-12','idontknow',500,3000),(68,'2021-05-12','idontknow',500,3000),(69,'2021-05-12','idontknow',500,3000),(70,'2021-05-12','idontknow',500,3000),(71,'2021-05-12','idontknow',500,3000),(72,'2021-05-12','idontknow',500,3000),(73,'2021-05-12','idontknow',500,3000),(74,'2021-05-12','idontknow',500,3000),(75,'2021-05-12','idontknow',500,3000),(76,'2021-05-12','idontknow',500,3000),(77,'2021-05-12','idontknow',500,3000),(78,'2021-05-12','idontknow',500,3000),(79,'2021-05-12','idontknow',500,3000),(80,'2021-05-12','idontknow',500,3000),(81,'2021-05-12','idontknow',500,3000),(82,'2021-05-12','idontknow',500,3000),(83,'2021-05-12','idontknow',500,3000),(84,'2021-05-12','idontknow',500,3000),(85,'2021-05-12','idontknow',500,3000),(86,'2021-05-12','idontknow',500,3000),(87,'2021-05-12','idontknow',500,3000),(88,'2021-05-12','idontknow',500,3000),(89,'2021-05-12','idontknow',500,3000),(90,'2021-05-12','idontknow',500,3000),(91,'2021-05-12','idontknow',500,3000),(92,'2021-05-12','idontknow',500,3000),(93,'2021-05-12','idontknow',500,3000),(94,'2021-05-12','idontknow',500,3000),(95,'2021-05-12','idontknow',500,3000),(96,'2021-05-12','idontknow',500,3000),(97,'2021-05-15','idontknow',12,32),(98,'2021-05-15','idontknow',12,32),(99,'2021-05-15','idontknow',1342,32),(100,'2021-05-15','idontknow',2,324),(101,'2021-05-15','idontknow',2,37456),(102,'2021-05-15','idontknow',2375,37456),(103,'2021-05-15','idontknow',2,3),(104,'2021-05-15','idontknow',1,1),(105,'2021-05-15','idontknow',1,0),(106,'2021-05-15','idontknow',14,0),(107,'2021-05-15','idontknow',14,343),(108,'2021-05-15','idontknow',0,43);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-15 19:20:20
