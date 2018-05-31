-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 30-05-2018 a las 03:38:28
-- Versión del servidor: 5.7.20
-- Versión de PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tabacalera123`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`database`@`%` PROCEDURE `CincoIngresosWinston` (IN `Marca1` VARCHAR(20))  NO SQL
SELECT SUM(ven.precioVenta*ven.cantidad) "Ingresos"
FROM Cigarillo cig
INNER JOIN Ventas ven
ON cig.idCigarillo = ven.idCigarillo
WHERE ven.fecha = str_to_date("22-8-1995", '%d-%m-%Y') AND cig.Marca = Marca1
GROUP BY ven.fecha$$

CREATE DEFINER=`database`@`%` PROCEDURE `CuatroMarcaUSA` (IN `Pais1` VARCHAR(20))  NO SQL
SELECT SUM(ven.cantidad), cig.Marca
FROM Ventas ven
INNER JOIN Cigarillo cig
ON ven.idCigarillo = cig.idCigarillo
INNER JOIN Manufactura man
ON cig.Marca = man.Marca
INNER JOIN Fabricante fab
ON man.idFabricanteM = fab.idFabricante
WHERE(fab.pais = Pais1) 
GROUP BY cig.Marca
ORDER BY SUM(ven.cantidad) desc 
LIMIT 1$$

CREATE DEFINER=`database`@`%` PROCEDURE `deleteAlmacen` (IN `idAlmancen1` INT)  NO SQL
DELETE
FROM Almacen
WHERE idAlmacen=idAlmacen1$$

CREATE DEFINER=`database`@`%` PROCEDURE `deleteCompra` (IN `idCompra1` INT)  NO SQL
DELETE
FROM Compra
WHERE numCompra=idCompra1$$

CREATE DEFINER=`database`@`%` PROCEDURE `deleteEstanco` (IN `numFiscal1` INT)  NO SQL
DELETE
FROM numFiscal
WHERE numFiscal=numFiscal1$$

CREATE DEFINER=`database`@`%` PROCEDURE `deleteFabricante` (IN `idFabricante1` INT)  NO SQL
DELETE
FROM Fabricante
WHERE idFabricante=idFabricante1$$

CREATE DEFINER=`database`@`%` PROCEDURE `deleteManufactura` (IN `idManufactura1` VARCHAR(50))  NO SQL
DELETE
FROM Manufactura
WHERE Marca=idManufactura1$$

CREATE DEFINER=`database`@`%` PROCEDURE `deletePedido` (IN `idPedido1` INT)  NO SQL
DELETE
FROM Pedido
WHERE idPedido=idPedido1$$

CREATE DEFINER=`database`@`%` PROCEDURE `deleteVentas` (IN `numVentas1` INT)  NO SQL
DELETE
FROM Ventas
WHERE numVentas=numVentas1$$

CREATE DEFINER=`database`@`%` PROCEDURE `DosImporteComprasCamel` (IN `Marca1` VARCHAR(20))  NO SQL
SELECT SUM(precioCompra*cantidad) "Importe de las Compras"
FROM (Compra c INNER JOIN Cigarillo cig ON c.idCigarillo=cig.idCigarillo) 
      INNER JOIN Estanco e ON c.numFiscal= e.numFiscal
WHERE cig.Marca = "Camel" AND e.numFiscal = "11111" AND YEAR(c.fecha) >= 1996$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertAlmacen1` (IN `idCigarillo1` INT, IN `existencia1` INT, IN `numFiscal1` VARCHAR(70))  NO SQL
insert into Almacen(idCigarillo, existencia, numFiscal) values (idCigarillo1,existencia1, numFiscal1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertarCompra` (IN `idAlmacen1` INT, IN `precioCompra1` FLOAT, IN `cantidad1` INT, IN `fecha1` INT, IN `numFiscal1` VARCHAR(70), IN `numCompra1` INT)  NO SQL
insert into Compra(precioCompra, cantidad, fecha, numFiscal,numCompra)
values (idAlmacen1, precioCompra1, cantidad1, fecha1, numFiscal1,numCompra1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertarEstanco` (IN `nombre1` VARCHAR(50), IN `Local_tb1` VARCHAR(55), IN `numExp1` INT, IN `numFiscal1` VARCHAR(55))  NO SQL
insert into Estanco(nombre, Provincia, numExp,numFiscal) 
values(nombre1, Local_tb1, numExp1,numFiscal1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertarFabricante` (IN `nombreF1` VARCHAR(50), IN `pais1` VARCHAR(30))  NO SQL
insert into Fabricante (nombreF, pais)
values(nombreF1, pais1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertarManufactura` (IN `idFabricanteM1` INT, IN `Marca1` VARCHAR(55), IN `Carton1` INT, IN `Embalaje` INT)  NO SQL
insert into Fabricante(idFabricanteM, Marca, Carton, Embalaje)
values (idFabricanteM1, Marca1, Carton1, Embalaje1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertarPedido` (IN `idAlmacenP1` INT, IN `cantidad1` INT, IN `numFiscalP1` INT)  NO SQL
insert into Pedido(idAlmacenP, cantidad, numFiscalP)
values (idAlmacenP1, cantidad1, numFiscalP1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertarVentas` (IN `idCigarillo1` INT, IN `numFiscalV1` INT, IN `precioVentas1` FLOAT, IN `cantidad1` INT, IN `fecha1` DATE)  NO SQL
insert into Ventas (numFiscal, precioVenta, cantidad,fecha,idCigarillo)
values (idAlmacenV1, numFiscalV1,precioVentas1,cantidad1,fecha1,idCigarillo1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `insertCigarillo` (IN `contaminante1` INT, IN `filtro1` INT, IN `mentolado1` INT, IN `hoja1` INT, IN `Marca1` VARCHAR(55))  NO SQL
insert into Cigarillo(contaminante, filtro, mentolado, hoja, Marca)
values (contaminante1, filtro1, mentolado1, hoja1, Marca1)$$

CREATE DEFINER=`database`@`%` PROCEDURE `NueveMentolCeltas` (IN `Celtas1` VARCHAR(20))  NO SQL
SELECT est.numFiscal, est.nombre
FROM Estanco est
INNER JOIN Almacen alm
ON alm.numFiscal=est.numFiscal
INNER JOIN Cigarillo cig
ON alm.idCigarillo=cig.idCigarillo

WHERE (cig.Marca != "Winston" AND cig.mentolado = 0 AND cig.Marca = Celtas1 AND cig.filtro = 0)$$

CREATE DEFINER=`database`@`%` PROCEDURE `SeisCalidadCigarillo` (IN `Cigarillo1` INT(15))  NO SQL
ALTER TABLE Cigarillo
ADD COLUMN MED_CALIDAD int$$

CREATE DEFINER=`database`@`%` PROCEDURE `SieteUnidades5` (IN `Five` INT(20))  NO SQL
ALTER TABLE Almacen MODIFY existencia int(5)$$

CREATE DEFINER=`database`@`%` PROCEDURE `tresValorVentasDucados` (IN `Marca1` VARCHAR(10))  NO SQL
SELECT SUM(ven.precioVenta*ven.cantidad)  "Venta en Madrid de Ducados"
FROM Ventas ven
INNER JOIN Cigarillo cig
ON cig.idCigarillo=ven.idCigarillo
INNER JOIN Manufactura man ON
cig.Marca=man.Marca
INNER JOIN Estanco est
ON est.numFiscal = ven.numFiscal
WHERE (cig.Marca = Marca1 AND est.Provincia = 'Madrid')$$

CREATE DEFINER=`database`@`%` PROCEDURE `UnoCigarrillosExtranjerosUSA` (IN `Pais1` VARCHAR(20))  NO SQL
SELECT m.Marca, f.Pais
FROM Manufactura m INNER JOIN Fabricante f 
ON m.idFabricanteM=f.idFabricante
WHERE f.pais=Pais1$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Almacen`
--

CREATE TABLE `Almacen` (
  `idAlmacen` int(11) NOT NULL,
  `idCigarillo` int(11) NOT NULL,
  `existencia` int(4) DEFAULT NULL,
  `numFiscal` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Almacen`
--

INSERT INTO `Almacen` (`idAlmacen`, `idCigarillo`, `existencia`, `numFiscal`) VALUES
(0, 0, 200, '11111'),
(1, 1, 34, '11111'),
(2, 2, 143, '11111'),
(3, 3, 234, '11111'),
(4, 4, 54, '11111'),
(5, 5, 12, '11111'),
(6, 6, 65, '11111'),
(7, 7, 321, '11111'),
(8, 8, 43, '11111'),
(9, 9, 231, '11111'),
(10, 10, 54, '11111'),
(11, 12, 43, '11111'),
(12, 13, 214, '11111'),
(13, 14, 126, '11111'),
(14, 15, 301, '11111'),
(15, 16, 201, '11111'),
(16, 0, 100, '11112'),
(17, 1, 134, '11112'),
(18, 2, 43, '11112'),
(19, 3, 34, '11112'),
(20, 4, 54, '11112'),
(21, 5, 112, '11112'),
(22, 6, 235, '11112'),
(23, 7, 421, '11112'),
(24, 8, 433, '11112'),
(25, 9, 231, '11112'),
(26, 10, 54, '11112'),
(27, 12, 423, '11112'),
(28, 13, 14, '11112'),
(29, 14, 136, '11112'),
(30, 15, 201, '11112'),
(31, 16, 201, '11112'),
(32, 0, 200, '11113'),
(33, 1, 34, '11113'),
(34, 2, 243, '11113'),
(35, 3, 134, '11113'),
(36, 4, 154, '11113'),
(37, 5, 12, '11113'),
(38, 6, 35, '11113'),
(39, 7, 21, '11113'),
(40, 8, 33, '11113'),
(41, 9, 331, '11113'),
(42, 10, 254, '11113'),
(43, 12, 423, '11113'),
(44, 13, 314, '11113'),
(45, 14, 36, '11113'),
(46, 15, 241, '11113'),
(47, 16, 201, '11113'),
(48, 0, 40, '11114'),
(49, 1, 234, '11114'),
(50, 2, 43, '11114'),
(51, 3, 34, '11114'),
(52, 4, 54, '11114'),
(53, 5, 312, '11114'),
(54, 6, 325, '11114'),
(55, 7, 251, '11114'),
(56, 8, 363, '11114'),
(57, 9, 31, '11114'),
(58, 10, 54, '11114'),
(59, 12, 23, '11114'),
(60, 13, 14, '11114'),
(61, 14, 376, '11114'),
(62, 15, 41, '11114'),
(63, 16, 201, '11114'),
(64, 0, 40, '11115'),
(65, 1, 234, '11115'),
(66, 2, 43, '11115'),
(67, 3, 34, '11115'),
(68, 4, 54, '11115'),
(69, 5, 312, '11115'),
(70, 6, 325, '11115'),
(71, 7, 251, '11115'),
(72, 8, 363, '11115'),
(73, 9, 31, '11115'),
(74, 10, 54, '11115'),
(75, 12, 23, '11115'),
(76, 13, 14, '11115'),
(77, 14, 376, '11115'),
(78, 15, 41, '11115'),
(79, 16, 201, '11115'),
(80, 0, 340, '11116'),
(81, 1, 34, '11116'),
(82, 2, 243, '11116'),
(83, 3, 134, '11116'),
(84, 4, 554, '11116'),
(85, 5, 312, '11116'),
(86, 6, 25, '11116'),
(87, 7, 51, '11116'),
(88, 8, 63, '11116'),
(89, 9, 361, '11116'),
(90, 10, 54, '11116'),
(91, 12, 243, '11116'),
(92, 13, 154, '11116'),
(93, 14, 76, '11116'),
(94, 15, 461, '11116'),
(95, 16, 201, '11116'),
(96, 0, 40, '11117'),
(97, 1, 344, '11117'),
(98, 2, 43, '11117'),
(99, 3, 34, '11117'),
(100, 4, 54, '11117'),
(101, 5, 12, '11117'),
(102, 6, 255, '11117'),
(103, 7, 531, '11117'),
(104, 8, 453, '11117'),
(105, 9, 61, '11117'),
(106, 10, 544, '11117'),
(107, 12, 43, '11117'),
(108, 13, 54, '11117'),
(109, 14, 436, '11117'),
(110, 15, 61, '11117'),
(111, 16, 201, '11117'),
(112, 0, 340, '11118'),
(113, 1, 44, '11118'),
(114, 2, 243, '11118'),
(115, 3, 434, '11118'),
(116, 4, 254, '11118'),
(117, 5, 112, '11118'),
(118, 6, 55, '11118'),
(119, 7, 31, '11118'),
(120, 8, 53, '11118'),
(121, 9, 261, '11118'),
(122, 10, 44, '11118'),
(123, 12, 243, '11118'),
(124, 13, 254, '11118'),
(125, 14, 36, '11118'),
(126, 15, 261, '11118'),
(127, 16, 201, '11118'),
(128, 0, 40, '11119'),
(129, 1, 344, '11119'),
(130, 2, 43, '11119'),
(131, 3, 34, '11119'),
(132, 4, 54, '11119'),
(133, 5, 12, '11119'),
(134, 6, 525, '11119'),
(135, 7, 331, '11119'),
(136, 8, 543, '11119'),
(137, 9, 61, '11119'),
(138, 10, 444, '11119'),
(139, 12, 43, '11119'),
(140, 13, 54, '11119'),
(141, 14, 356, '11119'),
(142, 15, 61, '11119'),
(143, 16, 201, '11119'),
(144, 0, 40, '11120'),
(145, 1, 344, '11120'),
(146, 2, 43, '11120'),
(147, 3, 34, '11120'),
(148, 4, 54, '11120'),
(149, 5, 12, '11120'),
(150, 6, 525, '11120'),
(151, 7, 331, '11120'),
(152, 8, 543, '11120'),
(153, 9, 61, '11120'),
(154, 10, 444, '11120'),
(155, 12, 43, '11120'),
(156, 13, 54, '11120'),
(157, 14, 356, '11120'),
(158, 15, 61, '11120'),
(159, 16, 201, '11120');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cigarillo`
--

CREATE TABLE `Cigarillo` (
  `idCigarillo` int(11) NOT NULL,
  `contaminante` int(11) DEFAULT NULL,
  `filtro` int(1) NOT NULL,
  `mentolado` int(1) NOT NULL,
  `hoja` int(1) DEFAULT NULL,
  `Marca` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Cigarillo`
--

INSERT INTO `Cigarillo` (`idCigarillo`, `contaminante`, `filtro`, `mentolado`, `hoja`, `Marca`) VALUES
(0, 1, 1, 0, 1, 'Nobel'),
(1, 3, 1, 0, 1, 'Nobel'),
(2, 0, 1, 0, 1, 'Fortuna'),
(3, 1, 1, 0, 1, 'Fortuna'),
(4, 3, 1, 0, 1, 'Fortuna'),
(5, 0, 1, 1, 1, 'Fortuna'),
(6, 0, 1, 0, 1, 'Malboro'),
(7, 0, 1, 0, 0, 'Celtas'),
(8, 0, 0, 0, 0, 'Celtas'),
(9, 0, 1, 0, 0, 'Ducados'),
(10, 0, 1, 0, 1, 'LM'),
(11, 1, 1, 0, 1, 'LM'),
(12, 0, 1, 0, 1, 'Chesterfield'),
(13, 0, 1, 0, 0, 'Corona'),
(14, 0, 0, 0, 1, 'Camel'),
(15, 1, 0, 0, 1, 'Camel'),
(16, 0, 0, 0, 1, 'Winston');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Compra`
--

CREATE TABLE `Compra` (
  `numCompra` int(11) NOT NULL,
  `precioCompra` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `numFiscal` varchar(70) NOT NULL,
  `idCigarillo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Compra`
--

INSERT INTO `Compra` (`numCompra`, `precioCompra`, `cantidad`, `fecha`, `numFiscal`, `idCigarillo`) VALUES
(0, 170, 400, '1996-01-02', '11111', 0),
(1, 180, 234, '1996-01-03', '11111', 1),
(2, 170, 443, '1996-03-01', '11111', 2),
(3, 180, 334, '1997-01-02', '11111', 3),
(4, 190, 154, '1996-01-04', '11111', 4),
(5, 170, 112, '1995-01-01', '11111', 2),
(6, 290, 165, '1996-01-03', '11111', 6),
(7, 150, 421, '1996-03-01', '11111', 8),
(8, 170, 143, '1996-01-01', '11111', 9),
(9, 170, 431, '1996-01-01', '11111', 10),
(10, 180, 154, '1996-01-01', '11111', 11),
(11, 270, 143, '1996-01-01', '11111', 12),
(12, 180, 314, '1996-01-01', '11111', 13),
(13, 170, 226, '1996-01-01', '11111', 14),
(14, 190, 401, '1996-01-01', '11111', 15),
(15, 290, 401, '1995-05-22', '11111', 16),
(16, 170, 300, '1995-01-01', '11112', 0),
(17, 180, 234, '1996-03-01', '11112', 1),
(18, 170, 343, '1996-06-01', '11112', 2),
(19, 180, 234, '1996-02-01', '11112', 3),
(20, 190, 154, '1995-01-01', '11112', 4),
(21, 170, 312, '1996-01-03', '11112', 2),
(22, 290, 435, '1996-02-01', '11112', 6),
(23, 150, 521, '1996-11-01', '11112', 7),
(24, 170, 633, '1996-05-01', '11112', 9),
(25, 170, 331, '1996-05-01', '11112', 10),
(26, 180, 354, '1996-10-01', '11112', 11),
(27, 270, 523, '1996-01-04', '11112', 12),
(28, 180, 514, '1996-01-13', '11112', 13),
(29, 170, 336, '1996-01-20', '11112', 14),
(30, 190, 701, '1995-01-01', '11112', 15),
(31, 290, 401, '1995-05-22', '11112', 16),
(32, 170, 400, '1996-01-21', '11113', 0),
(33, 180, 504, '1996-01-02', '11113', 1),
(34, 170, 743, '1996-01-01', '11113', 2),
(35, 180, 334, '1996-01-01', '11113', 3),
(36, 190, 554, '1996-03-01', '11113', 4),
(37, 170, 782, '1995-01-01', '11113', 2),
(38, 290, 135, '1996-06-01', '11113', 6),
(39, 150, 721, '1995-01-01', '11113', 7),
(40, 170, 633, '1995-01-01', '11113', 9),
(41, 170, 831, '1995-01-01', '11113', 10),
(42, 180, 354, '1996-06-01', '11113', 11),
(43, 270, 623, '1996-01-27', '11113', 12),
(44, 180, 514, '1996-07-01', '11113', 13),
(45, 170, 536, '1996-10-01', '11113', 14),
(46, 190, 641, '1995-01-01', '11113', 15),
(47, 290, 401, '1995-05-22', '11113', 16),
(48, 170, 440, '1996-05-01', '11114', 0),
(49, 180, 634, '1996-08-01', '11114', 1),
(50, 170, 343, '1995-01-01', '11114', 2),
(51, 180, 434, '1995-01-01', '11114', 3),
(52, 190, 454, '1995-01-01', '11114', 4),
(53, 170, 512, '1995-01-01', '11114', 2),
(54, 290, 425, '1996-07-01', '11114', 6),
(55, 150, 551, '1995-01-01', '11114', 7),
(56, 170, 563, '1996-11-01', '11114', 9),
(57, 170, 331, '1995-01-01', '11114', 10),
(58, 180, 754, '1996-08-01', '11114', 11),
(59, 270, 223, '1996-03-01', '11114', 12),
(60, 180, 314, '1996-11-01', '11114', 13),
(61, 170, 676, '1996-04-01', '11114', 14),
(62, 190, 541, '1996-05-01', '11114', 15),
(63, 290, 401, '1995-05-22', '11114', 16),
(64, 170, 540, '1995-01-01', '11115', 0),
(65, 180, 534, '1996-04-01', '11115', 1),
(66, 170, 343, '1996-07-01', '11115', 2),
(67, 180, 334, '1995-01-01', '11115', 3),
(68, 190, 554, '1996-02-01', '11115', 4),
(69, 170, 412, '1995-01-01', '11115', 2),
(70, 290, 425, '1995-01-01', '11115', 6),
(71, 150, 551, '1995-01-01', '11115', 7),
(72, 170, 463, '1996-04-01', '11115', 9),
(73, 170, 331, '1996-03-01', '11115', 10),
(74, 180, 454, '1996-07-01', '11115', 11),
(75, 270, 223, '1996-06-01', '11115', 12),
(76, 180, 314, '1996-02-01', '11115', 13),
(77, 170, 576, '1996-03-01', '11115', 14),
(78, 190, 441, '1996-02-01', '11115', 15),
(79, 290, 401, '1995-05-22', '11115', 16),
(80, 170, 440, '1995-01-01', '11116', 0),
(81, 180, 234, '1996-04-01', '11116', 1),
(82, 170, 443, '1995-01-01', '11116', 2),
(83, 180, 334, '1995-01-01', '11116', 3),
(84, 190, 654, '1996-06-01', '11116', 4),
(85, 170, 712, '1995-01-01', '11116', 2),
(86, 290, 125, '1996-02-01', '11116', 6),
(87, 150, 541, '1996-03-01', '11116', 7),
(88, 170, 363, '1996-04-01', '11116', 9),
(89, 170, 661, '1995-01-01', '11116', 10),
(90, 180, 454, '1996-03-01', '11116', 11),
(91, 270, 543, '1995-01-01', '11116', 12),
(92, 180, 554, '1996-02-01', '11116', 13),
(93, 170, 476, '1996-01-18', '11116', 14),
(94, 190, 661, '1996-01-15', '11116', 15),
(95, 290, 401, '1995-05-22', '11116', 16),
(96, 170, 340, '1996-11-01', '11117', 0),
(97, 180, 644, '1995-01-01', '11117', 1),
(98, 170, 343, '1996-04-01', '11117', 2),
(99, 180, 334, '1996-01-01', '11117', 3),
(100, 190, 354, '1996-01-01', '11117', 4),
(101, 170, 312, '1996-01-01', '11117', 2),
(102, 290, 455, '1996-01-01', '11117', 6),
(103, 150, 831, '1995-01-01', '11117', 7),
(104, 170, 553, '1995-01-01', '11117', 9),
(105, 170, 681, '1996-04-01', '11117', 10),
(106, 180, 644, '1996-01-01', '11117', 11),
(107, 270, 343, '1996-01-01', '11117', 12),
(108, 180, 254, '1996-01-01', '11117', 13),
(109, 170, 636, '1996-01-01', '11117', 14),
(110, 190, 261, '1995-01-01', '11117', 15),
(111, 290, 401, '1995-05-22', '11117', 16),
(112, 170, 540, '1996-01-13', '11118', 0),
(113, 180, 344, '1996-01-12', '11118', 1),
(114, 170, 543, '1996-01-14', '11118', 2),
(115, 180, 534, '1995-01-01', '11118', 3),
(116, 190, 454, '1996-01-01', '11118', 4),
(117, 170, 512, '1996-01-01', '11118', 2),
(118, 290, 355, '1996-01-01', '11118', 6),
(119, 150, 231, '1996-01-01', '11118', 7),
(120, 170, 353, '1995-01-01', '11118', 9),
(121, 170, 661, '1995-01-01', '11118', 10),
(122, 180, 444, '1996-05-01', '11118', 11),
(123, 270, 543, '1995-01-01', '11118', 12),
(124, 180, 554, '1995-01-01', '11118', 13),
(125, 170, 436, '1996-01-01', '11118', 14),
(126, 190, 661, '1996-01-01', '11118', 15),
(127, 290, 401, '1995-05-22', '11118', 16),
(128, 170, 340, '1995-01-01', '11119', 0),
(129, 180, 644, '1996-03-01', '11119', 1),
(130, 170, 443, '1996-04-01', '11119', 2),
(131, 180, 234, '1995-01-01', '11119', 3),
(132, 190, 454, '1996-05-01', '11119', 4),
(133, 170, 312, '1996-01-01', '11119', 2),
(134, 290, 725, '1996-01-01', '11119', 6),
(135, 150, 531, '1996-01-01', '11119', 7),
(136, 170, 743, '1996-01-01', '11119', 9),
(137, 170, 361, '1996-01-01', '11119', 10),
(138, 180, 544, '1995-01-01', '11119', 11),
(139, 270, 543, '1995-01-01', '11119', 12),
(140, 180, 454, '1995-01-01', '11119', 13),
(141, 170, 556, '1996-07-01', '11119', 14),
(142, 190, 361, '1996-01-01', '11119', 15),
(143, 290, 401, '1995-05-22', '11119', 16),
(144, 170, 440, '1996-01-01', '11120', 0),
(145, 180, 544, '1996-01-01', '11120', 1),
(146, 170, 343, '1996-01-01', '11120', 2),
(147, 180, 234, '1996-01-01', '11120', 3),
(148, 190, 254, '1996-01-01', '11120', 4),
(149, 170, 212, '1996-01-01', '11120', 2),
(150, 290, 825, '1996-01-01', '11120', 6),
(151, 150, 531, '1995-01-01', '11120', 7),
(152, 170, 743, '1995-01-01', '11120', 9),
(153, 170, 361, '1995-01-01', '11120', 10),
(154, 180, 744, '1995-01-01', '11120', 11),
(155, 270, 343, '1995-01-01', '11120', 12),
(156, 180, 454, '1995-01-01', '11120', 13),
(157, 170, 656, '1996-01-01', '11120', 14),
(158, 190, 761, '1995-01-01', '11120', 15),
(159, 290, 401, '1995-05-22', '11120', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Estanco`
--

CREATE TABLE `Estanco` (
  `numFiscal` varchar(70) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `Provincia` varchar(55) NOT NULL,
  `numExp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Estanco`
--

INSERT INTO `Estanco` (`numFiscal`, `nombre`, `Provincia`, `numExp`) VALUES
('11111', 'La Pajarita', 'Madrid', 9111),
('11112', 'El Clavel', 'Madrid', 9112),
('11113', 'La Paloma', 'Madrid', 9113),
('11114', 'La Canela', 'Madrid', 9114),
('11115', 'La Zona', 'Cordoba', 9511),
('11116', 'El Humo', 'Cordoba', 9572),
('11117', 'Costa Sol', 'Cordoba', 9573),
('11118', 'El Pilar', 'Sevilla', 9541),
('11119', 'La Hoguera', 'Sevilla', 9542),
('11120', 'La Juliana', 'Sevilla', 9521);

--
-- Disparadores `Estanco`
--
DELIMITER $$
CREATE TRIGGER `doceChars` BEFORE INSERT ON `Estanco` FOR EACH ROW IF LENGTH(numFiscal) < 12 THEN
  SIGNAL SQLSTATE "45000" SET MESSAGE_TEXT = "No pueden tener menos de doce   caracteres";
  END IF
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Fabricante`
--

CREATE TABLE `Fabricante` (
  `idFabricante` int(11) NOT NULL,
  `nombreF` varchar(50) NOT NULL,
  `pais` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Fabricante`
--

INSERT INTO `Fabricante` (`idFabricante`, `nombreF`, `pais`) VALUES
(1, 'Tabacalera S. A.', 'España'),
(2, 'Philips Morris', 'USA'),
(3, 'R. J. Reynolds Tobaco Co.', 'USA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Manufactura`
--

CREATE TABLE `Manufactura` (
  `idFabricanteM` int(11) NOT NULL,
  `Marca` varchar(30) NOT NULL,
  `Carton` int(11) NOT NULL,
  `Embalaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Manufactura`
--

INSERT INTO `Manufactura` (`idFabricanteM`, `Marca`, `Carton`, `Embalaje`) VALUES
(3, 'Camel', 10, 20),
(1, 'Celtas', 10, 20),
(2, 'Chesterfield', 10, 20),
(1, 'Corona', 10, 20),
(1, 'Ducados', 10, 20),
(1, 'Fortuna', 10, 20),
(1, 'LM', 10, 20),
(3, 'Malboro', 10, 20),
(1, 'Nobel', 10, 20),
(3, 'Winston', 10, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Ventas`
--

CREATE TABLE `Ventas` (
  `numVentas` int(11) NOT NULL,
  `numFiscal` varchar(70) DEFAULT NULL,
  `precioVenta` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idCigarillo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Ventas`
--

INSERT INTO `Ventas` (`numVentas`, `numFiscal`, `precioVenta`, `cantidad`, `fecha`, `idCigarillo`) VALUES
(0, '11111', 250, 200, '1996-04-02', 0),
(1, '11111', 260, 200, '1996-04-03', 1),
(2, '11111', 250, 300, '1996-06-01', 2),
(3, '11111', 260, 100, '1997-04-02', 3),
(4, '11111', 270, 100, '1996-04-04', 4),
(5, '11111', 250, 100, '1995-04-01', 2),
(6, '11111', 320, 100, '1996-04-03', 6),
(7, '11111', 240, 100, '1996-06-01', 8),
(8, '11111', 265, 100, '1996-04-01', 9),
(9, '11111', 260, 200, '1996-04-01', 10),
(10, '11111', 270, 100, '1996-04-01', 11),
(11, '11111', 320, 100, '1996-04-01', 12),
(12, '11111', 230, 100, '1996-04-01', 13),
(13, '11111', 290, 100, '1996-04-01', 14),
(14, '11111', 310, 100, '1996-04-01', 15),
(15, '11111', 410, 200, '1995-08-22', 16),
(16, '11112', 250, 200, '1995-04-01', 0),
(17, '11112', 260, 100, '1996-06-01', 1),
(18, '11112', 250, 300, '1996-09-01', 2),
(19, '11112', 260, 200, '1996-05-01', 3),
(20, '11112', 270, 100, '1995-04-01', 4),
(21, '11112', 250, 200, '1996-04-03', 2),
(22, '11112', 320, 200, '1996-05-01', 6),
(23, '11112', 240, 100, '1997-02-01', 7),
(24, '11112', 265, 200, '1996-08-01', 9),
(25, '11112', 260, 100, '1996-08-01', 10),
(26, '11112', 270, 300, '1997-01-01', 11),
(27, '11112', 320, 100, '1996-04-04', 12),
(28, '11112', 230, 500, '1996-04-13', 13),
(29, '11112', 290, 200, '1996-04-20', 14),
(30, '11112', 310, 500, '1995-04-01', 15),
(31, '11112', 410, 200, '1995-08-22', 16),
(32, '11113', 250, 200, '1996-04-21', 0),
(33, '11113', 260, 471, '1996-04-02', 1),
(34, '11113', 250, 500, '1996-04-01', 2),
(35, '11113', 260, 200, '1996-04-01', 3),
(36, '11113', 270, 400, '1996-06-01', 4),
(37, '11113', 260, 770, '1995-04-01', 2),
(38, '11113', 320, 100, '1996-09-01', 6),
(39, '11113', 240, 700, '1995-04-01', 7),
(40, '11113', 265, 600, '1995-04-01', 9),
(41, '11113', 260, 500, '1995-04-01', 10),
(42, '11113', 270, 100, '1996-09-01', 11),
(43, '11113', 320, 200, '1996-04-27', 12),
(44, '11113', 230, 200, '1996-10-01', 13),
(45, '11113', 290, 500, '1997-01-01', 14),
(46, '11113', 310, 400, '1995-04-01', 15),
(47, '11113', 410, 200, '1995-08-22', 16),
(48, '11114', 250, 400, '1996-08-01', 0),
(49, '11114', 260, 400, '1996-11-01', 1),
(50, '11114', 250, 300, '1995-04-01', 2),
(51, '11114', 260, 400, '1995-04-01', 3),
(52, '11114', 270, 400, '1995-04-01', 4),
(53, '11114', 250, 200, '1995-04-01', 2),
(54, '11114', 320, 100, '1996-10-01', 6),
(55, '11114', 240, 300, '1995-04-01', 7),
(56, '11114', 265, 200, '1997-02-01', 9),
(57, '11114', 260, 300, '1995-04-01', 10),
(58, '11114', 270, 700, '1996-11-01', 11),
(59, '11114', 320, 200, '1996-06-01', 12),
(60, '11114', 230, 300, '1997-02-01', 13),
(61, '11114', 290, 300, '1996-07-01', 14),
(62, '11114', 310, 500, '1996-08-01', 15),
(63, '11114', 410, 200, '1995-08-22', 16),
(64, '11115', 250, 500, '1995-04-01', 0),
(65, '11115', 260, 300, '1996-07-01', 1),
(66, '11115', 250, 300, '1996-10-01', 2),
(67, '11115', 260, 300, '1995-04-01', 3),
(68, '11115', 270, 500, '1996-05-01', 4),
(69, '11115', 250, 100, '1995-04-01', 2),
(70, '11115', 320, 100, '1995-05-01', 6),
(71, '11115', 240, 300, '1995-04-01', 7),
(72, '11115', 265, 100, '1996-07-01', 9),
(73, '11115', 260, 300, '1996-06-01', 10),
(74, '11115', 270, 400, '1996-10-01', 11),
(75, '11115', 320, 200, '1996-09-01', 12),
(76, '11115', 230, 300, '1996-05-01', 13),
(77, '11115', 290, 200, '1996-06-01', 14),
(78, '11115', 310, 400, '1996-05-01', 15),
(79, '11115', 410, 200, '1995-08-22', 16),
(80, '11116', 250, 100, '1995-04-01', 0),
(81, '11116', 260, 200, '1996-07-01', 1),
(82, '11116', 250, 200, '1995-04-01', 2),
(83, '11116', 260, 200, '1995-04-01', 3),
(84, '11116', 270, 100, '1996-09-01', 4),
(85, '11116', 250, 400, '1995-04-01', 2),
(86, '11116', 320, 100, '1996-05-01', 6),
(87, '11116', 240, 490, '1996-06-01', 7),
(88, '11116', 265, 300, '1996-07-01', 9),
(89, '11116', 260, 300, '1995-04-01', 10),
(90, '11116', 270, 400, '1996-06-01', 11),
(91, '11116', 320, 300, '1995-04-01', 12),
(92, '11116', 230, 400, '1996-05-01', 13),
(93, '11116', 290, 400, '1996-04-18', 14),
(94, '11116', 310, 200, '1996-04-15', 15),
(95, '11116', 410, 200, '1995-08-22', 16),
(96, '11117', 250, 300, '1997-02-01', 0),
(97, '11117', 260, 300, '1995-04-01', 1),
(98, '11117', 250, 300, '1996-08-01', 2),
(99, '11117', 260, 300, '1996-04-01', 3),
(100, '11117', 270, 300, '1996-04-01', 4),
(101, '11117', 250, 300, '1996-04-01', 2),
(102, '11117', 320, 200, '1996-04-01', 6),
(103, '11117', 240, 300, '1995-04-01', 7),
(104, '11117', 265, 100, '1995-04-01', 9),
(106, '11117', 260, 620, '1996-07-01', 10),
(107, '11117', 320, 300, '1996-04-01', 12),
(108, '11117', 230, 200, '1996-04-01', 13),
(109, '11117', 290, 200, '1996-04-01', 14),
(110, '11117', 310, 200, '1995-04-01', 15),
(111, '11117', 410, 200, '1995-08-22', 16),
(112, '11118', 250, 200, '1996-04-13', 0),
(113, '11118', 260, 300, '1996-04-12', 1),
(114, '11118', 250, 300, '1996-04-14', 2),
(115, '11118', 260, 100, '1995-04-01', 3),
(116, '11118', 270, 200, '1996-04-01', 4),
(117, '11118', 250, 400, '1996-04-01', 2),
(118, '11118', 320, 300, '1996-04-01', 6),
(119, '11118', 240, 200, '1996-04-01', 7),
(120, '11118', 265, 300, '1995-04-01', 9),
(121, '11118', 260, 400, '1995-04-01', 10),
(122, '11118', 270, 400, '1996-08-01', 11),
(123, '11118', 320, 300, '1995-04-01', 12),
(124, '11118', 230, 300, '1995-04-01', 13),
(125, '11118', 290, 400, '1996-04-01', 14),
(126, '11118', 310, 400, '1996-04-01', 15),
(127, '11118', 410, 200, '1995-08-22', 16),
(128, '11119', 250, 300, '1995-04-01', 0),
(129, '11119', 260, 300, '1996-06-01', 1),
(130, '11119', 250, 400, '1996-04-01', 2),
(131, '11119', 260, 200, '1995-04-01', 3),
(132, '11119', 270, 400, '1996-08-01', 4),
(133, '11119', 250, 300, '1996-04-01', 2),
(134, '11119', 320, 200, '1996-04-01', 6),
(135, '11119', 240, 2001, '1996-04-01', 7),
(136, '11119', 265, 200, '1996-04-01', 9),
(137, '11119', 260, 300, '1996-04-01', 10),
(138, '11119', 270, 100, '1995-04-01', 11),
(139, '11119', 320, 500, '1995-04-01', 12),
(140, '11119', 230, 400, '1995-04-01', 13),
(141, '11119', 290, 200, '1996-10-01', 14),
(142, '11119', 310, 300, '1996-04-01', 15),
(143, '11119', 410, 200, '1995-08-22', 16),
(144, '11120', 250, 400, '1996-04-01', 0),
(145, '11120', 260, 200, '1996-04-01', 1),
(146, '11120', 250, 300, '1996-04-01', 2),
(147, '11120', 250, 200, '1996-04-01', 3),
(148, '11120', 270, 200, '1996-04-01', 4),
(149, '11120', 250, 200, '1996-04-01', 2),
(150, '11120', 320, 300, '1996-04-01', 6),
(151, '11120', 240, 200, '1995-04-01', 7),
(152, '11120', 265, 200, '1995-04-01', 9),
(153, '11120', 260, 300, '1995-04-01', 10),
(154, '11120', 270, 300, '1995-04-01', 11),
(155, '11120', 320, 300, '1995-04-01', 12),
(156, '11120', 230, 400, '1995-04-01', 13),
(157, '11120', 290, 300, '1996-04-01', 14),
(158, '11120', 310, 700, '1995-04-01', 15),
(159, '11120', 410, 200, '1995-08-22', 16),
(160, '11117', 270, 100, '1996-04-01', 11);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Almacen`
--
ALTER TABLE `Almacen`
  ADD PRIMARY KEY (`idAlmacen`),
  ADD KEY `numFiscal_Alma` (`numFiscal`),
  ADD KEY `Cigarillo_almacen` (`idCigarillo`);

--
-- Indices de la tabla `Cigarillo`
--
ALTER TABLE `Cigarillo`
  ADD PRIMARY KEY (`idCigarillo`),
  ADD KEY `Marca_Cig` (`Marca`);

--
-- Indices de la tabla `Compra`
--
ALTER TABLE `Compra`
  ADD PRIMARY KEY (`numCompra`),
  ADD KEY `numFiscal_compra` (`numFiscal`),
  ADD KEY `Cigarillo_comjn` (`idCigarillo`);

--
-- Indices de la tabla `Estanco`
--
ALTER TABLE `Estanco`
  ADD PRIMARY KEY (`numFiscal`);

--
-- Indices de la tabla `Fabricante`
--
ALTER TABLE `Fabricante`
  ADD PRIMARY KEY (`idFabricante`);

--
-- Indices de la tabla `Manufactura`
--
ALTER TABLE `Manufactura`
  ADD PRIMARY KEY (`Marca`),
  ADD KEY `idFabricanteM` (`idFabricanteM`);

--
-- Indices de la tabla `Ventas`
--
ALTER TABLE `Ventas`
  ADD PRIMARY KEY (`numVentas`),
  ADD KEY `numFiscal_ven` (`numFiscal`),
  ADD KEY `Cigarillo_Ventkm` (`idCigarillo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Fabricante`
--
ALTER TABLE `Fabricante`
  MODIFY `idFabricante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Almacen`
--
ALTER TABLE `Almacen`
  ADD CONSTRAINT `Cigarillo_almacen` FOREIGN KEY (`idCigarillo`) REFERENCES `Cigarillo` (`idCigarillo`),
  ADD CONSTRAINT `numFiscal_Alma` FOREIGN KEY (`numFiscal`) REFERENCES `Estanco` (`numFiscal`);

--
-- Filtros para la tabla `Compra`
--
ALTER TABLE `Compra`
  ADD CONSTRAINT `Cigarillo_com` FOREIGN KEY (`idCigarillo`) REFERENCES `Cigarillo` (`idCigarillo`),
  ADD CONSTRAINT `Cigarillo_comjn` FOREIGN KEY (`idCigarillo`) REFERENCES `Cigarillo` (`idCigarillo`),
  ADD CONSTRAINT `numFiscal_compra` FOREIGN KEY (`numFiscal`) REFERENCES `Estanco` (`numFiscal`);

--
-- Filtros para la tabla `Manufactura`
--
ALTER TABLE `Manufactura`
  ADD CONSTRAINT `idFabricanteM` FOREIGN KEY (`idFabricanteM`) REFERENCES `Fabricante` (`idFabricante`);

--
-- Filtros para la tabla `Ventas`
--
ALTER TABLE `Ventas`
  ADD CONSTRAINT `Cigarillo_Vent` FOREIGN KEY (`idCigarillo`) REFERENCES `Cigarillo` (`idCigarillo`),
  ADD CONSTRAINT `Cigarillo_Ventkm` FOREIGN KEY (`idCigarillo`) REFERENCES `Cigarillo` (`idCigarillo`),
  ADD CONSTRAINT `numFiscal_ven` FOREIGN KEY (`numFiscal`) REFERENCES `Estanco` (`numFiscal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
