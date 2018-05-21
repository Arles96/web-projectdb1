import express from 'express'

const route = express.Router(),
    username = "renevelazques@unitec.edu",
    password = "HolaMundo"

route
    .post('/login', (req, res, next)=>{
        if(username===req.body.username && password===req.body.password){
            res.json({login : true})
            req.session.username = req.body.username
        }
        else {
            res.json({login : false})
        }
    })
    //Obtiene todas los datos de los cigarrillos
    .get('/cigarrillos', (req, res)=>{
        
    })
    //Obtiene todos los datos de almacen
    .get('/almacen', (req, res)=>{

    })
    //Obtienen todos los datos de pedidos
    .get('/pedidos', (req, res)=>{

    })
    //Obtiene todos los datos de estancos
    .get('/estancos', (req, res)=>{

    })
    //Obtiene todos los datos de fabricantes
    .get('/fabricantes', (req, res)=>{

    })
    //obtiene todos los datos de compras
    .get('/compras', (req, res)=>{

    })
    //obtienen todos los datos de ventas
    .get('/ventas', (req, res)=>{

    })

export default route
