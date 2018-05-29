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
    .put('/actualizar/compra', (req, res)=>{

    })
    //Actualizar los datos de ventas
    .put('/actualizar/venta', (req, res)=>{
        
    })
    //Actualizar los datos de estanco
    .put('/actualizar/estanco', (req, res)=>{
        
    })
    //Actualizar los datos de cigarrillo
    .put('/actualizar/cigarrillo', (req, res)=>{
        
    })
    //Actualizar los datos de manufactura
    .put('/actualizar/manufactura', (req, res)=>{
        
    })
    //Actualizar los datos de almacen
    .put('/actualizar/almacen', (req, res)=>{
        
    })
    //Actualizar los datos de fabricante
    .put('/actualizar/fabricante', (req, res)=>{
        
    })
    /**
     * Inicio de eliminar una fila de las tablas
     */
    //Elimina compra
    .delete('/eliminar/compra',(req, res)=> {

    })
    //Elimina venta
    .delete('/eliminar/venta',(req, res)=> {

    })
    //Elimina estanco
    .delete('/eliminar/estanco',(req, res)=> {

    })
    //Elimina manufactura
    .delete('/eliminar/manufactura',(req, res)=> {

    })
    //Elimina almacen
    .delete('/eliminar/almacen',(req, res)=> {

    })
    //Elimina fabricante
    .delete('/eliminar/fabricante',(req, res)=> {

    })
    //Elimina cigarrillo
    .delete('/eliminar/cigarrillo', (req, res)=> {

    })
    /**
     * Aqui retorna las consultas especificas del proyecto
     */

export default route
