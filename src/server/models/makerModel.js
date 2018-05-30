import conn from './conection'

const Maker = ()=> {

}

Maker.getAll = (cb)=>{
    conn.query(`SELECT * FROM FABRICANTE`, cb)
}

Maker.getOne = (id, cb) => {
    conn.query(`SELECT * FROM FABRICANTE WHERE IDFABRICANTE=?`, id, cb)
}

Maker.save = (data, checker, cb)=> {
    //si es verdadero inserta los datos
    if (checker){
        conn.query(`CALL INSERTARFABRICANTE(?,?,?,?)`, data, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Fabricante set nombreF=?, pais=? where idFabricante=?`)
    }
}

Maker.delete = (id, cb) => {
    conn.query(`CALL DELETEFABRICANTE(?)`, id, cb)
}

export default Maker