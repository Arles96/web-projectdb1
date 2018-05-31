import conn from './conection'

const Cigarette = ()=> {

}

Cigarette.getAll = (cb)=>{
    conn.query(`SELECT * FROM CIGARILLO`, cb)
}

Cigarette.getOne = (id, cb) => {
    conn.query(`SELECT * FROM CIGARILLO WHERE IDCIGARILLO=?`, id, cb)
}

Cigarette.save = (data, checker, cb)=> {
    //si es verdadero inserta los datos
    if (checker){
        conn.query(`CALL insertCigarillo(${data.contaminante}, ${data.filtro}, ${data.mentolado}, ${data.hoja}, '${data.Marca}')`, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Cigarillo set contaminante=${data.contaminante}, filtro=${data.filtro}, mentolado=${data.mentolado}, hoja=${data.hoja}, Marca='${data.Marca}'  where idCigarillo=${data.idCigarillo}`, cb)
    }
}

Cigarette.delete = (id, cb) => {
    conn.query(`DELETE FROM CIGARILLO WHERE IDCIGARILLO=?`, id, cb)
}

export default Cigarette