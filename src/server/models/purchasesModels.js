import conn from './conection'

const Purchases = ()=> {

}

Purchases.getAll = (cb)=>{
    conn.query(`SELECT * FROM COMPRA`, cb)
}

Purchases.getOne = (id, cb) => {
    conn.query(`SELECT * FROM COMPRA WHERE NUMCOMPRA=?`, id, cb)
}

Purchases.save = (data, checker, cb)=> {
    //si es verdadero inserta los datos*
    if (checker){
        conn.query(`INSERT INTO compra SET ?`, data, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Compra set precioCompra=${data.precioCompra},cantidad=${data.cantidad},fecha=${data.fecha},numFiscal=${data.numFiscal}, idCigarillo=${data.idCigarillo} where numCompra=${data.numCompra}`, cb);
    }
}

Purchases.delete = (id, cb) => {
    conn.query(`CALL DELETECOMPRA(?)`, id, cb)
}

export default Purchases