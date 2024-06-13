-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2024 at 06:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nicfit`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `name`, `alamat`, `phone`, `role`, `refresh_token`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@admin.com', '$2b$10$5F5d/PbL7qmsW6feCX0h2.pHxKoCuRC6rlJdmKJZ1fadIWomeK5BS', NULL, NULL, NULL, 'user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOm51bGwsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBob25lIjpudWxsLCJyb2xlIjoidXNlciIsImltYWdlIjpudWxsLCJ1cmwiOm51bGwsImlhdCI6MTcxODExMDA5NCwiZXhwIjoxNzE4MTk2NDk0fQ.L4gR7VVV5uspndzMaGUf4Jn0Ol08s6bQGaqPozsHsD8', NULL, NULL, '2024-06-05 07:39:54', '2024-06-11 12:48:14'),
(2, 'user', 'user@user.com', '$2b$10$fn.in8j.2BOcxOYrvgeFg.YG1jcVYNKDr.lIpYSpA63bH8LcZm4We', NULL, NULL, NULL, 'user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOm51bGwsInVzZXJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInBob25lIjpudWxsLCJyb2xlIjoidXNlciIsImltYWdlIjpudWxsLCJ1cmwiOm51bGwsImlhdCI6MTcxNzkyMjEwMiwiZXhwIjoxNzE4MDA4NTAyfQ.bGmPlKlDg1MuNvIBCvtr6LiQyLEfJCRwnelNT0_67-o', NULL, NULL, '2024-06-09 06:27:56', '2024-06-09 08:35:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
