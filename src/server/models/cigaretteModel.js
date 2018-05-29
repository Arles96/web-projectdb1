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
        conn.query(`CALL INSERTARCIGARILLO(?,?,?,?)`, data, cb)
    }else {
        //query para actualizar
        conn.query(``)
    }
}

Cigarette.delete = (id, cb) => {
    conn.query(`DELETE FROM CIGARILLO WHERE IDCIGARILLO=?`, id, cb)
}

export default Cigaretteimport 