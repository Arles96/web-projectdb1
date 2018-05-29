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
        conn.query(`CALL INSERTARALMACEN(?,?,?,?)`, data, cb)
    }else {
        //query para actualizar
        conn.query(``)
    }
}

Warehouse.delete = (id, cb) => {
    conn.query(`CALL DELETEALMACEN(?)`, id, cb)
}

export default Warehouse