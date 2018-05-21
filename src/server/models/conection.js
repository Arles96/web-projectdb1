import mysql from 'mysql'

const connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '',
    database : 'tabacalera123'
})

connection.connect((err)=>{
    return (err) ? console.log(`Error al Conectarse a MySQL: ${err.stack}`) : console.log(`Conexion establecida con MySQL N°: ${myConn.threadId}`)
})

export default connection