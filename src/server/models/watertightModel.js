import conn from './conection'

const Watertight = ()=> {

}

Watertight.getAll = (cb)=>{
    conn.query(`SELECT * FROM ESTANCO`, cb)
}

Watertight.getOne = (id, cb) => {
    conn.query(`SELECT * FROM ESTANCO WHERE NUMFISCAL=?`, id, cb)
}

Watertight.save = (data, checker, cb)=> {
    //si es verdadero inserta los datos
    if (checker){
        conn.query(`CALL INSERTARESTANCO(?,?,?,?)`, data, cb)
    }else {
        //query para actualizar
        conn.query(``)
    }
}

Watertight.delete = (id, cb) => {
    conn.query(`CALL DELETEESTANCO(?)`, id, cb)
}

export default Watertight