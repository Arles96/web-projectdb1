import mysql from 'mysql'

const connection = mysql.createConnection({
    host : 'k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port : '3306',
    user : 'j303kx7r2zulke5c',
    password : 'qyzcfrteuldo6d6r',
    database : 'yfzmyuv46lj1dits'
})

connection.connect((err)=>{
    return (err) ? console.log(`Error al Conectarse a MySQL: ${err.stack}`) : 
        console.log(`Conexion establecida con MySQL N°: ${connection.threadId}`)
})

export default connection