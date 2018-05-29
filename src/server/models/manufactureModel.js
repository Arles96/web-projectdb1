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
        conn.query(`CALL INSERTARMANUFACTURA(?,?,?,?)`, data, cb)
    }else {
        //query para actualizar
        conn.query(``)
    }
}

Manufacture.delete = (marca, cb) => {
    conn.query(`CALL DELETEMANUFACTURA(?)`, marca, cb)
}

export default Manufacture