CREATE  PROCEDURE `CincoIngresosWinston` (IN `Marca1` VARCHAR(20))  NO SQL
SELECT SUM(ven.precioVenta*ven.cantidad) "Ingresos"
FROM Cigarillo cig
INNER JOIN Ventas ven
ON cig.idCigarillo = ven.idCigarillo
WHERE ven.fecha = str_to_date("22-8-1995", '%d-%m-%Y') AND cig.Marca = Marca1
GROUP BY ven.fecha$$

CREATE  PROCEDURE `CuatroMarcaUSA` (IN `Pais1` VARCHAR(20))  NO SQL
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

CREATE  PROCEDURE `deleteAlmacen` (IN `idAlmancen1` INT)  NO SQL
DELETE
FROM Almacen
WHERE idAlmacen=idAlmacen1$$

CREATE  PROCEDURE `deleteCompra` (IN `idCompra1` INT)  NO SQL
DELETE
FROM Compra
WHERE numCompra=idCompra1$$

CREATE  PROCEDURE `deleteEstanco` (IN `numFiscal1` INT)  NO SQL
DELETE
FROM numFiscal
WHERE numFiscal=numFiscal1$$

CREATE  PROCEDURE `deleteFabricante` (IN `idFabricante1` INT)  NO SQL
DELETE
FROM Fabricante
WHERE idFabricante=idFabricante1$$

CREATE  PROCEDURE `deleteManufactura` (IN `idManufactura1` VARCHAR(50))  NO SQL
DELETE
FROM Manufactura
WHERE Marca=idManufactura1$$

CREATE  PROCEDURE `deletePedido` (IN `idPedido1` INT)  NO SQL
DELETE
FROM Pedido
WHERE idPedido=idPedido1$$

CREATE  PROCEDURE `deleteVentas` (IN `numVentas1` INT)  NO SQL
DELETE
FROM Ventas
WHERE numVentas=numVentas1$$

CREATE  PROCEDURE `DosImporteComprasCamel` (IN `Marca1` VARCHAR(20))  NO SQL
SELECT SUM(precioCompra*cantidad) "Importe de las Compras"
FROM (Compra c INNER JOIN Cigarillo cig ON c.idCigarillo=cig.idCigarillo) 
      INNER JOIN Estanco e ON c.numFiscal= e.numFiscal
WHERE cig.Marca = "Camel" AND e.numFiscal = "11111" AND YEAR(c.fecha) >= 1996$$

CREATE  PROCEDURE `insertAlmacen1` (IN `idCigarillo1` INT, IN `existencia1` INT, IN `numFiscal1` VARCHAR(70))  NO SQL
insert into Almacen(idCigarillo, existencia, numFiscal) values (idCigarillo1,existencia1, numFiscal1)$$

CREATE  PROCEDURE `insertarCompra` (IN `idAlmacen1` INT, IN `precioCompra1` FLOAT, IN `cantidad1` INT, IN `fecha1` INT, IN `numFiscal1` VARCHAR(70), IN `numCompra1` INT)  NO SQL
insert into Compra(precioCompra, cantidad, fecha, numFiscal,numCompra)
values (idAlmacen1, precioCompra1, cantidad1, fecha1, numFiscal1,numCompra1)$$

CREATE  PROCEDURE `insertarEstanco` (IN `nombre1` VARCHAR(50), IN `Local_tb1` VARCHAR(55), IN `numExp1` INT, IN `numFiscal1` VARCHAR(55))  NO SQL
insert into Estanco(nombre, Provincia, numExp,numFiscal) 
values(nombre1, Local_tb1, numExp1,numFiscal1)$$

CREATE  PROCEDURE `insertarFabricante` (IN `nombreF1` VARCHAR(50), IN `pais1` VARCHAR(30))  NO SQL
insert into Fabricante (nombreF, pais)
values(nombreF1, pais1)$$

CREATE  PROCEDURE `insertarManufactura` (IN `idFabricanteM1` INT, IN `Marca1` VARCHAR(55), IN `Carton1` INT, IN `Embalaje` INT)  NO SQL
insert into Fabricante(idFabricanteM, Marca, Carton, Embalaje)
values (idFabricanteM1, Marca1, Carton1, Embalaje1)$$

CREATE  PROCEDURE `insertarPedido` (IN `idAlmacenP1` INT, IN `cantidad1` INT, IN `numFiscalP1` INT)  NO SQL
insert into Pedido(idAlmacenP, cantidad, numFiscalP)
values (idAlmacenP1, cantidad1, numFiscalP1)$$

CREATE  PROCEDURE `insertarVentas` (IN `idCigarillo1` INT, IN `numFiscalV1` INT, IN `precioVentas1` FLOAT, IN `cantidad1` INT, IN `fecha1` DATE)  NO SQL
insert into Ventas (numFiscal, precioVenta, cantidad,fecha,idCigarillo)
values (idAlmacenV1, numFiscalV1,precioVentas1,cantidad1,fecha1,idCigarillo1)$$

CREATE  PROCEDURE `insertCigarillo` (IN `contaminante1` INT, IN `filtro1` INT, IN `mentolado1` INT, IN `hoja1` INT, IN `Marca1` VARCHAR(55))  NO SQL
insert into Cigarillo(contaminante, filtro, mentolado, hoja, Marca)
values (contaminante1, filtro1, mentolado1, hoja1, Marca1)$$

CREATE  PROCEDURE `NueveMentolCeltas` (IN `Celtas1` VARCHAR(20))  NO SQL
SELECT est.numFiscal, est.nombre
FROM Estanco est
INNER JOIN Almacen alm
ON alm.numFiscal=est.numFiscal
INNER JOIN Cigarillo cig
ON alm.idCigarillo=cig.idCigarillo
WHERE (cig.Marca != "Winston" AND cig.mentolado = 0 AND cig.Marca = Celtas1 AND cig.filtro = 0)$$

CREATE  PROCEDURE `SeisCalidadCigarillo` (IN `Cigarillo1` INT(15))  NO SQL
ALTER TABLE Cigarillo
ADD COLUMN MED_CALIDAD int$$

CREATE  PROCEDURE `SieteUnidades5` (IN `Five` INT(20))  NO SQL
ALTER TABLE Almacen MODIFY existencia int(5)$$

CREATE  PROCEDURE `tresValorVentasDucados` (IN `Marca1` VARCHAR(10))  NO SQL
SELECT SUM(ven.precioVenta*ven.cantidad)  "Venta en Madrid de Ducados"
FROM Ventas ven
INNER JOIN Cigarillo cig
ON cig.idCigarillo=ven.idCigarillo
INNER JOIN Manufactura man ON
cig.Marca=man.Marca
INNER JOIN Estanco est
ON est.numFiscal = ven.numFiscal
WHERE (cig.Marca = Marca1 AND est.Provincia = 'Madrid')$$

CREATE  PROCEDURE `UnoCigarrillosExtranjerosUSA` (IN `Pais1` VARCHAR(20))  NO SQL
SELECT m.Marca, f.Pais
FROM Manufactura m INNER JOIN Fabricante f 
ON m.idFabricanteM=f.idFabricante
WHERE f.pais=Pais1$$

DELIMITER ;