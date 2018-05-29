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
    //si es verdadero inserta los datos
    if (checker){
        conn.query(`CALL INSERTARVENTAS(?,?,?,?)`, data, cb)
    }else {
        //query para actualizar
        conn.query(``)
    }
}

Sales.delete = (id, cb) => {
    conn.query(`CALL DELETEVENTAS(?)`, id, cb)
}

export default Sales