import mysql from 'mysql'

const connection = mysql.createConnection({
    host : 'mysql',
    port : '3306',
    user : 'database',
    password : 'HelloWorld',
    database : 'tabacalera123'
})

connection.connect((err)=>{
    return (err) ? console.log(`Error al Conectarse a MySQL: ${err.stack}`) : 
        console.log(`Conexion establecida con MySQL N°: ${connection.threadId}`)
})

export default connection