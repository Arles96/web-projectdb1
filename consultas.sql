--Consulta 4
SELECT SUM(ven.cantidad), cig.Marca
FROM Ventas ven
INNER JOIN Cigarillo cig
ON ven.idCigarillo = cig.idCigarillo
INNER JOIN Manufactura man
ON cig.Marca = man.Marca
INNER JOIN Fabricante fab
ON man.idFabricanteM = fab.idFabricante
WHERE(fab.pais = "USA") 
GROUP BY cig.Marca
ORDER BY SUM(ven.cantidad) desc 
LIMIT 1

--Consulta 5
SELECT SUM(ven.precioVenta*ven.cantidad) "Ingresos"
FROM Cigarillo cig
INNER JOIN Ventas ven
ON cig.idCigarillo = ven.idCigarillo
WHERE ven.fecha = str_to_date("22-8-1995", '%d-%m-%Y') AND cig.Marca = 'Winston'
GROUP BY ven.fecha

ALTER TABLE Cigarillo
ADD COLUMN MED_CALIDAD int

--Consulta 3    
SELECT SUM(ven.precioVenta*ven.cantidad)  "Venta en Madrid de Ducados"
FROM Ventas ven
INNER JOIN Cigarillo cig
ON cig.idCigarillo=ven.idCigarillo
INNER JOIN Manufactura man ON
cig.Marca=man.Marca
INNER JOIN Estanco est
ON est.numFiscal = ven.numFiscal
WHERE (cig.Marca = "Ducados" AND est.Provincia = 'Madrid')

--Consulta 2
SELECT SUM(precioCompra*cantidad) "Importe de las Compras"
FROM (Compra c INNER JOIN Cigarillo cig ON c.idCigarillo=cig.idCigarillo) 
      INNER JOIN Estanco e ON c.numFiscal= e.numFiscal
WHERE cig.Marca = "Camel" AND e.numFiscal = "11111" AND YEAR(c.fecha) >= 1996

--Consulta 1
SELECT m.Marca, f.Pais
FROM Manufactura m INNER JOIN Fabricante f 
ON m.idFabricanteM=f.idFabricante
WHERE f.pais='USA'

--Consulta 9

SELECT est.numFiscal, est.nombre
FROM Estanco est
INNER JOIN Almacen alm
ON alm.numFiscal=est.numFiscal
INNER JOIN Cigarillo cig
ON alm.idCigarillo=cig.idCigarillo
WHERE (cig.Marca != 'Winston' AND cig.mentolado = 0 AND cig.Marca = 'Celtas' AND cig.filtro = 0)
LIMIT 1;