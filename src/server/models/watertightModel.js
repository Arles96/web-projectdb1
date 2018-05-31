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
        conn.query(`CALL insertarEstanco('${data.nombre}', '${data.Provincia}', ${data.numExp}, '${data.numFiscal}')`, data, cb)
    }else {
        //query para actualizar
        conn.query(`UPDATE Estanco set nombre='${data.nombre}', Provincia='${data.Provincia}',numExp=${data.numExp} where numFiscal='${data.numFiscal}'`, cb)
        
    }
}

Watertight.delete = (id, cb) => {
    conn.query(`DELETE FROM estanco WHERE numFiscal='${id}'`, id, cb)
}

export default Watertight