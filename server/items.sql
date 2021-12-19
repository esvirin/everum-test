-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 24 2021 г., 01:42
-- Версия сервера: 8.0.19
-- Версия PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `welbex`
--

-- --------------------------------------------------------

--
-- Структура таблицы `items`
--

CREATE TABLE `items` (
  `id` int NOT NULL,
  `date` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `distance` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `items`
--

INSERT INTO `items` (`id`, `date`, `title`, `quantity`, `distance`) VALUES
(1, '2024-10-20 02:00:00', 'title', 2, 3000),
(2, '2024-10-20 02:00:00', 'title', 3, 2000),
(3, '2024-10-20 02:00:00', 'title', 7, 5000),
(4, '2024-10-20 02:00:00', 'title', 3, 4000),
(5, '2024-10-20 02:00:00', 'title', 6, 2000),
(6, '2024-10-20 02:00:00', 'title', 11, 6000),
(7, '2024-10-20 02:00:00', 'title', 32, 7000),
(8, '2024-10-20 02:00:00', 'title', 12, 8000),
(9, '2024-10-20 02:00:00', 'title', 24, 9000),
(10, '2024-10-20 02:00:00', 'title', 22, 1000),
(11, '2024-10-20 02:00:00', 'title', 21, 2000),
(12, '2024-10-20 02:00:00', 'title', 7, 5000),
(13, '2024-10-20 02:00:00', 'title', 3, 4000),
(14, '2024-10-20 02:00:00', 'title', 6, 2000),
(15, '2024-10-20 02:00:00', 'title', 11, 6000),
(16, '2024-10-20 02:00:00', 'title', 32, 7000),
(17, '2024-10-20 02:00:00', 'title', 12, 8000),
(18, '2024-10-20 02:00:00', 'title', 24, 9000),
(19, '2024-10-20 02:00:00', 'title', 22, 1000),
(20, '2024-10-20 02:00:00', 'title', 21, 2000);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `items`
--
ALTER TABLE `items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
