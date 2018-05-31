import conn from './conection'

const Sales = ()=> {

}

Sales.getAll = (cb)=>{
    conn.query(`SELECT * FROM VENTAS`, cb)
}

Sales.getOne = (id, cb) => {
    conn.query(`SELECT * FROM VENTAS WHERE NUMVENTAS=?`, id, cb)
}

Sales.save = (data, checker, cb)=> {
    //si es verdadero inserta los datos*
    if (checker){
        conn.query(`INSERT INTO ventas SET ?`, data, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Ventas set idCigarillo=${data.idCigarillo},numFiscal=${data.numFiscal},precioVenta=${data.precioVenta},cantidad=${data.cantidad},fecha=${data.fecha} where numVentas=${data.numVenta}`, cb)
    }
}

Sales.delete = (id, cb) => {
    conn.query(`CALL deleteVentas(?)`, id, cb)
}

export default Sales