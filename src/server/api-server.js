import express from 'express'
import cigarette from './models/cigaretteModel'
import maker from './models/makerModel'
import manufacture from './models/manufactureModel'
import purchases from './models/purchasesModels'
import sales from './models/salesModel'
import warehouse from './models/warehouseModel'
import watertight from './models/watertightModel'
import Warehouse from './models/warehouseModel'
import respuesta from './models/consulta'

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
        cigarette.getAll((err, result)=> {
            res.json({
                data : result
            })
        })
    })
    //Obtiene todos los datos de almacen
    .get('/almacen', (req, res)=>{
        warehouse.getAll((err, result)=> {
            res.json({
                data : result
            })
        })
    })
    //Obtienen todos los datos de manufactura
    .get('/manufactura', (req, res)=>{
        manufacture.getAll((err, result)=> {
            res.json({
                data : result
            })
        })
    })
    //Obtiene todos los datos de estancos
    .get('/estancos', (req, res)=>{
        watertight.getAll((err, result)=> {
            res.json({
                data : result
            })
        })
    })
    //Obtiene todos los datos de fabricantes
    .get('/fabricantes', (req, res)=>{
        maker.getAll((err, result)=> {
            res.json({
                data : result
            })
        })
    })
    //obtiene todos los datos de compras
    .get('/compras', (req, res)=>{
        purchases.getAll((err, result)=> {
            res.json({
                data : result
            })
        })
    })
    //obtienen todos los datos de ventas
    .get('/ventas', (req, res)=>{
        sales.getAll((err, result)=> {
            res.json({
                data : result
            })
        })
    })
    /**
     * Inicio para insertar en las tablas
     */
    //Insertar una compra
    .post('/insertar/compra', (req, res)=> {
        purchases.save(req.body.data, true, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Insertar una venta
    .post('/insertar/venta', (req, res)=> {
        sales.save(req.body.data, true, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Insertar una estanco
    .post('/insertar/estanco', (req, res)=> {
        watertight.save(req.body.data, true, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Insertar una cigarrillo
    .post('/insertar/cigarrillo', (req, res)=> {
        cigarette.save(req.body.data, true, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Insertar una manufactura
    .post('/insertar/manufactura', (req, res)=> {
        manufacture.save(req.body.data, true, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Insertar una almacen
    .post('/insertar/almacen', (req, res)=> {
        warehouse.save(req.body.data, true, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Insertar una fabricante
    .post('/insertar/fabricante', (req, res)=> {
        maker.save(req.body.data, true, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    /**
     * Inicio de actualizar los datos de la tabla
     */
    //Actualizar los datos de compras
    .post('/actualizar/compra', (req, res)=>{
        purchases.save(req.body.data, false, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Actualizar los datos de ventas
    .post('/actualizar/venta', (req, res)=>{
        sales.save(req.body.data, false, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Actualizar los datos de estanco
    .post('/actualizar/estanco', (req, res)=>{
        watertight.save(req.body.data, false, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Actualizar los datos de cigarrillo
    .post('/actualizar/cigarrillo', (req, res)=>{
        console.log(req.body.data)
         cigarette.save(req.body.data, false, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        }) 
    })
    //Actualizar los datos de manufactura
    .post('/actualizar/manufactura', (req, res)=>{
        manufacture.save(req.body.data, false, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Actualizar los datos de almacen
    .post('/actualizar/almacen', (req, res)=>{
        warehouse.save(req.body.data, false, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    //Actualizar los datos de fabricante
    .post('/actualizar/fabricante', (req, res)=>{
        maker.save(req.body.data, false, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Ningun problema")
            }
        })
    })
    /**
     * Inicio de eliminar una fila de las tablas
     */
    //Elimina compra
    .post('/eliminar/compra',(req, res)=> {
        purchases.delete(req.body.id, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Se elimino con exitos")
            }
        })
    })
    //Elimina venta
    .post('/eliminar/venta',(req, res)=> {
        sales.delete(req.body.id, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Se elimino con exitos")
            }
        })
    })
    //Elimina estanco
    .post('/eliminar/estanco',(req, res)=> {
        watertight.delete(req.body.id, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Se elimino con exitos")
            }
        })
    })
    //Elimina manufactura
    .post('/eliminar/manufactura',(req, res)=> {
        manufacture.delete(req.body.id, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Se elimino con exitos")
            }
        })
    })
    //Elimina almacen
    .post('/eliminar/almacen',(req, res)=> {
        warehouse.delete(parseInt(req.body.id), (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Se elimino con exitos")
            }
        })
    })
    //Elimina fabricante
    .post('/eliminar/fabricante',(req, res)=> {
        maker.delete(req.body.id, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Se elimino con exitos")
            }
        })
    })
    //Elimina cigarrillo
    .post('/eliminar/cigarrillo', (req, res)=> {
        cigarette.delete(req.body.id, (err, result)=> {
            if (err){
                console.log(err)
            }else {
                console.log("Se elimino con exitos")
            }
        })
    })
    /**
     * Aqui retorna las consultas especificas del proyecto
     */
    .get('/consulta1', (req, res)=> {
        respuesta.consulta1((err, result)=> {
            if (err) {
                console.log(err)
            }else {
                res.json({
                    consulta : result 
                })
            }
        })
    })
    .get('/consulta2', (req, res)=> {
        respuesta.consulta2((err, result)=> {
            if (err) {
                console.log(err)
            }else {
                res.json({
                    consulta : result 
                })
            }
        })
    })
    .get('/consulta3', (req, res)=> {
        respuesta.consulta3((err, result)=> {
            if (err) {
                console.log(err)
            }else {
                res.json({
                    consulta : result 
                })
            }
        })
    })
    .get('/consulta4', (req, res)=> {
        respuesta.consulta4((err, result)=> {
            if (err) {
                console.log(err)
            }else {
                res.json({
                    consulta : result 
                })
            }
        })
    })
    .get('/consulta5', (req, res)=> {
        respuesta.consulta5((err, result)=> {
            if (err) {
                console.log(err)
            }else {
                res.json({
                    consulta : result 
                })
            }
        })
    })
    .get('/consulta9', (req, res)=> {
        respuesta.consulta9((err, result)=> {
            if (err) {
                console.log(err)
            }else {
                res.json({
                    consulta : result 
                })
            }
        })
    })

export default route
