import conn from './conection'

const Manufacture = ()=> {

}

Manufacture.getAll = (cb)=>{
    conn.query(`SELECT * FROM MANUFACTURA`, cb)
}

Manufacture.getOne = (marca, cb) => {
    conn.query(`SELECT * FROM MANUFACTURA WHERE MARCA=?`, marca, cb)
}

Manufacture.save = (data, checker, cb)=> {
    //si es verdadero inserta los datos
    if (checker){
        conn.query(`CALL insertarManufactura(${data.idFabricanteM}, '${data.Marca}', ${data.Carton}, ${data.Embalaje})`, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Manufactura set idFabricanteM=${data.idFabricanteM}, Carton=${data.Carton}, Embalaje=${data.Embalaje}  where Marca='${data.Marca}'`, cb)
    }
}

Manufacture.delete = (marca, cb) => {
    conn.query(`CALL deleteManufactura(?)`, marca, cb)
}

export default Manufacture