import express from 'express'

const route = express.Router(),
    username = "renevelazques@unitec.edu",
    password = "HolaMundo"

route
    //Login del usuario
    .post('/login', (req, res, next)=>{
        if(username===req.body.username && password===req.body.password){
            res.json({login : true})
            req.session.username = req.body.username
        }
        else {
            res.json({login : false})
        }
    })
    /***
     * Inicio de obtener todos los datos de la tabla
     */
    //Obtiene todas los datos de los cigarrillos
    .get('/cigarrillos', (req, res)=>{
        
    })
    //Obtiene todos los datos de almacen
    .get('/almacen', (req, res)=>{

    })
    //Obtienen todos los datos de manufactura
    .get('/manufactura', (req, res)=>{

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
    /**
     * Inicio para insertar en las tablas
     */
    //Insertar una compra
    .post('/insertar/compra', (req, res)=> {

    })
    //Insertar una venta
    .post('/insertar/venta', (req, res)=> {

    })
    //Insertar una estanco
    .post('/insertar/estanco', (req, res)=> {

    })
    //Insertar una cigarrillo
    .post('/insertar/cigarrillo', (req, res)=> {

    })
    //Insertar una manufactura
    .post('/insertar/manufactura', (req, res)=> {

    })
    //Insertar una almacen
    .post('/insertar/almacen', (req, res)=> {

    })
    //Insertar una fabricante
    .post('/insertar/fabricante', (req, res)=> {

    })
    /**
     * Inicio de actualizar los datos de la tabla
     */
    //Actualizar los datos de compras
    .post('/actualizar/compra', (req, res)=>{

    })
    //Actualizar los datos de ventas
    .post('/actualizar/venta', (req, res)=>{
        
    })
    //Actualizar los datos de estanco
    .post('/actualizar/estanco', (req, res)=>{
        
    })
    //Actualizar los datos de cigarrillo
    .post('/actualizar/cigarrillo', (req, res)=>{
        
    })
    //Actualizar los datos de manufactura
    .post('/actualizar/manufactura', (req, res)=>{
        
    })
    //Actualizar los datos de almacen
    .post('/actualizar/almacen', (req, res)=>{
        
    })
    //Actualizar los datos de fabricante
    .post('/actualizar/fabricante', (req, res)=>{
        
    })
    /**
     * Inicio de eliminar una fila de las tablas
     */
    //Elimina compra
    .post('/eliminar/compra',(req, res)=> {

    })
    //Elimina venta
    .post('/eliminar/venta',(req, res)=> {

    })
    //Elimina estanco
    .post('/eliminar/estanco',(req, res)=> {

    })
    //Elimina manufactura
    .post('/eliminar/manufactura',(req, res)=> {

    })
    //Elimina almacen
    .post('/eliminar/almacen',(req, res)=> {

    })
    //Elimina fabricante
    .post('/eliminar/fabricante',(req, res)=> {

    })
    //Elimina cigarrillo
    .post('/eliminar/cigarrillo', (req, res)=> {

    })
    /**
     * Aqui retorna las consultas especificas del proyecto
     */

export default route
