import mysql from 'mysql'

const connection = mysql.createConnection({
    host : 'k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port : '3306',
    user : 'pokfui235crzjltl',
    password : 'ewgt1qkpb9l4w3yg',
    database : 'uhdyqegavsyojnti'
})

connection.connect((err)=>{
    return (err) ? console.log(`Error al Conectarse a MySQL: ${err.stack}`) : 
        console.log(`Conexion establecida con MySQL N°: ${connection.threadId}`)
})

export default connection