import conn from './conection'

const Warehouse = ()=> {

}

Warehouse.getAll = (cb)=>{
    conn.query(`SELECT * FROM ALMACEN`, cb)
}

Warehouse.getOne = (id, cb) => {
    conn.query(`SELECT * FROM ALMACEN WHERE IDALMACEN=?`, id, cb)
}

Warehouse.save = (data, checker, cb)=> {
    //si es verdadero inserta los datos
    if (checker){
        conn.query(`CALL insertAlmacen1(${data.idCigarillo}, ${data.existencia}, '${data.numFiscal}')`, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Almacen set idCigarillo=${data.idCigarillo}, existencia=${data.existencia}, numFiscal='${data.numFiscal}' where idAlmacen=${data.idAlmacen}`, cb)
    }
}

Warehouse.delete = (id, cb) => {
    conn.query(`DELETE FROM Almacen WHERE idAlmacen=?`, id, cb)
}

export default Warehouse