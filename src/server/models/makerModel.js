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
        conn.query(`CALL insertarFabricante('${data.nombre}', '${data.pais}')`, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Fabricante set nombreF='${data.nombre}', pais='${data.pais}' where idFabricante=${data.idFabricante}`, cb)
    }
}

Maker.delete = (id, cb) => {
    conn.query(`CALL deleteFabricante(?)`, id, cb)
}

export default Maker