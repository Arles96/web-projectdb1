import React, {Component} from 'react'
import FormAdd from '../FormAdd/FormAdd'
import FormUpdate from '../FormUpdate/FormUpdate'
import cigarette from '../img/cigarette.svg'
import maker from  '../img/maker.svg'
import purchases from '../img/purchases.svg'
import Manufacture from '../img/Manufacture.svg'
import sales from '../img/sales.svg'
import warehouse from '../img/warehouse.svg'
import watertight from '../img/watertight.svg'
import './Database.css'
import axios from 'axios'
import Table from '../Table/Table'

/**
 * Este componente es un contenedor que muestra todos los registros 
 * de la tabla seleccionada recibe dos argumentos
 * @argument entity es la entidad seleccionada para mostrar y realizar operaciones 
 */
class Database extends Component {

    constructor(){
        super()
        this.state = {
            form : true,
            linkAdd : "nav-link active",
            linkUpdate : "nav-link",
            data : []
        }
        this.handleIcon = this.handleIcon.bind(this)
        this.handleForms = this.handleForms.bind(this)
        this.eventItemAdd = this.eventItemAdd.bind(this)
        this.eventItemUpdate = this.eventItemUpdate.bind(this)
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this)
        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this)
    }

    handleSubmitUpdate(e){
        e.preventDefault()
        //Actualiza Fabricante
        if(this.props.entity==="maker"){
            axios.post('/api/actualizar/fabricante', {
                data : {
                    idFabricante : e.target.idFabricante.value,
                    nombre : e.target.nombreF.value,
                    pais : e.target.paisF.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        } 
        //Actualiza almacen
        else if(this.props.entity==="warehouse"){
            axios.post('/api/actualizar/almacen', {
                data : {
                    idAlmacen : e.target.idAlmacen.value,
                    idCigarillo : e.target.idCigarrilloA.value,
                    existencia : e.target.existencia.value,
                    numFiscal : e.target.nifA.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //Actualizar cigarrillo
        else if (this.props.entity==="cigarette"){
            console.log("actualizando")
            axios.post('/api/actualizar/cigarrillo', {
                data : {
                    idCigarillo : parseInt(e.target.idCigarrillo.value),
                    Marca : e.target.marca.value,
                    contaminante : parseInt(e.target.contaminante.value),
                    filtro : parseInt(e.target.filtro.value),
                    mentolado : parseInt(e.target.mentolado.value),
                    hoja : parseInt(e.target.hoja.value),
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //Actualizar compra
        else if (this.props.entity==="purchases"){
            axios.post('/api/actualizar/compra', {
                data : {
                    numCompra : e.target.numCompra.value,
                    idCigarillo : e.target.idCigarrilloC.value,
                    precioCompra : e.target.precioC.value,
                    cantidad : e.target.cantidadC.value,
                    fecha : e.target.fechaC.value,
                    numFiscal : e.target.nifEstancoC.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //Actualizar estanco
        else if (this.props.entity==="watertight"){
            axios.post('/api/actualizar/estanco', {
                data : {
                    numFiscal : e.target.nifEstanco.value,
                    nombre : e.target.nombreExp.value,
                    Provincia : e.target.localExp.value,
                    numExp : e.target.numExp.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //Actualizar Venta
        else if (this.props.entity==="sales"){
            axios.post('/api/actualizar/venta', {
                data : {
                    numVenta : e.target.numVenta.value,
                    numFiscal : e.target.nifEstancoV.value,
                    idCigarillo : e.target.idCigarrilloV.value,
                    precioVenta : e.target.precioVenta.value,
                    cantidad : e.target.cantidadV.value,
                    fecha : e.target.fechaV.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //Actualizar manufactura
        else {
            axios.post('/api/actualizar/manufactura', {
                data : {
                    idFabricanteM : e.target.idFabricanteM.value,
                    Marca : e.target.marcaM.value,
                    Carton : e.target.carton.value,
                    Embalaje : e.target.embalaje.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
    }

    handleSubmitAdd(e){
        e.preventDefault()
        //Agrega fabricante
        if(this.props.entity==="maker"){
            axios.post('/api/insertar/fabricante', {
                data : {
                    nombre : e.target.nombreF.value,
                    pais : e.target.paisF.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        } 
        //Agrega almacen
        else if(this.props.entity==="warehouse"){
            axios.post('/api/insertar/almacen', {
                data : {
                    idCigarillo : e.target.idCigarrilloA.value,
                    existencia : e.target.existencia.value,
                    numFiscal : e.target.nifEstancoA.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //Agrega cigarrillo
        else if (this.props.entity==="cigarette"){
            axios.post('/api/insertar/cigarrillo', {
                data : {
                    contaminante : parseInt(e.target.contaminante.value),
                    filtro : parseInt(e.target.filtro.value),
                    mentolado : parseInt(e.target.mentolado.value),
                    hoja : parseInt(e.target.hoja.value),
                    Marca : e.target.marca.value                
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //Agrega compra
        else if (this.props.entity==="purchases"){
            axios.post('/api/insertar/compra', {
                data : {
                    idCigarillo : e.target.idCigarrilloC.value,
                    precioCompra : e.target.precioC.value,
                    cantidad : e.target.cantidadC.value,
                    fecha : e.target.fechaC.value,
                    numFiscal : e.target.nifEstancoC.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
        //
        else if (this.props.entity==="watertight"){
            axios.post('/api/insertar/estanco', {
                data : {
                    nombre : e.target.nombreExp.value,
                    Provincia : e.target.localExp.value,
                    numExp : e.target.numExp.value,
                    numFiscal : e.target.nifEstanco.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }else if (this.props.entity==="sales"){
            axios.post('/api/insertar/venta', {
                data : {
                    numFiscal : e.target.nifEstancoV.value,
                    idCigarillo : e.target.idCigarrilloV.value,
                    precioVenta : e.target.precioVenta.value,
                    cantidad : e.target.cantidadV.value,
                    fecha : e.target.fechaV.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }else {
            axios.post('/api/insertar/manufactura', {
                data : {
                    idFabricanteM : e.target.idFabricanteM.value,
                    Marca : e.target.marcaM.value,
                    Carton : e.target.carton.value,
                    Embalaje : e.target.embalaje.value
                }
            }).then(res => console.log(res.data) )
            .catch(err => console.log(res.data))
        }
    }

    //Función de mostrar el icono corresponiente para cada tabla
    handleIcon(){
        if (this.props.entity==="cigarette"){
            return (<img src={cigarette} className="icon-title mr-3" />)
        }
        else if (this.props.entity==="maker"){
            return (<img src={maker} className="icon-title mr-3" />)
        }
        else if (this.props.entity==="purchases"){
            return (<img src={purchases} className="icon-title mr-3" />)
        }
        else if (this.props.entity==="sales"){
            return (<img src={sales} className="icon-title mr-3" />)
        }
        else if (this.props.entity==="watertight"){
            return (<img src={watertight} className="icon-title mr-3" />)
        }
        else if (this.props.entity==="Manufacture"){
            return (<img src={Manufacture} className="icon-title mr-3" />)
        }
        else {
            return (<img src={warehouse} className="icon-title mr-3" />)
        }
    }

    eventItemAdd(){
        this.setState({
            form : true,
            linkAdd : "nav-link active",
            linkUpdate : "nav-link"
        })
    }

    eventItemUpdate(){
        this.setState({
            form : false,
            linkAdd : "nav-link",
            linkUpdate : "nav-link active"
        })
    }
    
    //Funcion que se encarga de mostrar el formulario y activar el nav-item correspondiente 
    handleForms(){
        if (this.state.form){
            return (
                <FormAdd 
                    table={this.props.entity} 
                    method={this.handleSubmitAdd}
                /> 
            )
        }else {
            return (
                <FormUpdate 
                    method={this.handleSubmitUpdate}
                    table={this.props.entity} 
                /> 
            )
        }
    }

    render(){
        return (
            <div className="container">
                <div className="mb-4">
                    <h1 className="text-center" >
                        {this.handleIcon()}
                        {this.props.title}                    
                    </h1>
                </div>
                <div className="row" >
                    <div className="col-md-8">
                        <Table entity={this.props.entity} />
                    </div>
                    <div className="col-md-4" >
                        <ul className="nav nav-tabs" >
                            <li className="nav-item item-form" onClick={this.eventItemAdd} >
                               <a className={this.state.linkAdd}>Agregar</a>
                            </li>
                            <li className="nav nav-item item-form" onClick={this.eventItemUpdate} >
                                <a className={this.state.linkUpdate}>Actualizar</a>
                            </li>
                        </ul>
                        {this.handleForms()}
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Database