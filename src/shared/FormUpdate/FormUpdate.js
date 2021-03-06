import React, {Component} from 'react'
import './FormUpdate.css'
import axios from 'axios'

/**
 * Este componente es un formulario para actualizar que recibe tres 
 * atributos que son data, table y method
 * @argument table este contiene el nombre de la tabla
 * @argument method este es la función para el evento onSubmit
 */
class FormUpdate extends Component{

    constructor(){
        super()
        this.state = {
            id : null
        }
        this.handleFormMaker = this.handleFormMaker.bind(this)
        this.handleFormCigarette = this.handleFormCigarette.bind(this)
        this.handleFormManufacture = this.handleFormManufacture.bind(this)
        this.handleFormPurchases = this.handleFormPurchases.bind(this)
        this.handleFormSales = this.handleFormSales.bind(this)
        this.handleFormWarehouse = this.handleFormWarehouse.bind(this)
        this.handleFormWatertight = this.handleFormWatertight.bind(this)
        this.renderForms = this.renderForms.bind(this)
        this.handleChangeId = this.handleChangeId.bind(this)
        this.handleDeleteRegister = this.handleDeleteRegister.bind(this)
    }

    //Obteniendo el id cuando lo escriba
    handleChangeId(e){
        this.setState({id : e.target.value})
        console.log("Hola"+ this.state.id)
    }

    handleDeleteRegister(){
        if(this.props.table==="maker"){
            axios.post('/api/eliminar/fabricante', 
                { 
                    id :this.state.id
                }).then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        } 
        else if(this.props.table==="warehouse"){
            axios.post('/api/eliminar/almacen', 
                { 
                    id :this.state.id
                }).then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
        else if (this.props.table==="cigarette"){
            axios.post('/api/eliminar/cigarrillo', 
                { 
                    id :this.state.id
                }).then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
        else if (this.props.table==="purchases"){
            axios.post('/api/eliminar/compra', 
                { 
                    id :this.state.id
                }).then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
        else if (this.props.table==="watertight"){
            axios.post('/api/eliminar/estanco', 
                { 
                    id :this.state.id
                }).then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }else if (this.props.table==="sales"){
            axios.post('/api/eliminar/venta', 
                { 
                    id :this.state.id
                }).then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }else {
            axios.post('/api/eliminar/manufactura', 
                { 
                    id :this.state.id
                }).then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
    }

    //Formulario para actualizar Fabricante
    handleFormMaker(){
        return (
            <form onSubmit={this.props.method} >
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">id Fab.</label>
                    <input onChange={this.handleChangeId} name="idFabricante" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Nombre</label>
                    <input name="nombreF" type="text" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Pais</label>
                    <input name="paisF" type="text" className="form-control form-control-sm" 
                        />
                </div>
                <button type="submit" className="btn btn-success btn-block" >Actualizar</button>
            </form>
        )
    }

    //Formmulario para actualizar Almacen
    handleFormWarehouse(){
        return (
            <form onSubmit={this.props.method}>
            <div className="form-group form-inline">
                    <label className="mr-2 label-update">idAlmacen</label>
                    <input  name="idAlmacen" type="number" className="form-control form-control-sm" 
                        onChange={this.handleChangeId}/>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Id Cigarrillo</label>
                    <input name="idCigarrilloA" type="number" className="form-control form-control-sm" 
                         />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">NIF</label>
                    <input name="nifA" type="text" className="form-control form-control-sm" />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Existencia</label>
                    <input name="existencia" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <button type="submit" className="btn btn-success btn-block">Actualizar</button>
            </form>
        )        
    }

    //Formluario para actualizar Cigarrillos
    handleFormCigarette(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Id Cig.</label>
                    <input name="idCigarrillo" type="number" className="form-control form-control-sm" 
                        onChange={this.handleChangeId}/>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Marca</label>
                    <input name="marca" type="text" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Contaminante</label>
                    <select name="contaminante" className="form-control form-control-sm">
                        <option value="0">Normal</option>
                        <option value="1">light</option>
                        <option value="2">superlight</option>
                        <option value="3">ultralight</option>
                    </select>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Filtro</label>
                    <select name="filtro" className="form-control form-control-sm">
                        <option value="0">Si</option>
                        <option value="1">No</option>
                    </select>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Mentolado</label>
                    <select name="mentolado" className="form-control form-control-sm">
                        <option value="0">Si</option>
                        <option value="1">No</option>
                    </select>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Hoja</label>
                    <select name="hoja" className="form-control form-control-sm">
                        <option value="0">Negra</option>
                        <option value="1">Rubia</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-block">Actualizar</button>
            </form>
        )
    }

    //Formulario para actualizar Compras
    handleFormPurchases(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">No. Compra</label>
                    <input name="numCompra" type="number" className="form-control form-control-sm" onChange={this.handleChangeId} />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">id Cig.</label>
                    <input name="idCigarrilloC" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">NIF</label>
                    <input name="nifEstancoC" type="text" className="form-control form-control-sm" />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Precio</label>
                    <input name="precioC" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Cantidad</label>
                    <input name="cantidadC" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Fecha</label>
                    <input name="fechaC" type="date" className="form-control form-control-sm" />
                </div>
                <button type="submit" className="btn btn-success btn-block">Actualizar</button>
            </form>
        )
    }

    //Formulario para actualizar Estanco
    handleFormWatertight(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">NIF</label>
                    <input name="nifEstanco" type="text" className="form-control form-control-sm" onChange={this.handleChangeId}/>
                </div>
                <div className="form-group form-inline">
                        <label>No. Expendio</label>
                        <input name="numExp" type="number" className="form-control form-control-sm" 
                            />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Nombre</label>
                    <input name="nombreExp" type="text" className="form-control form-control-sm" />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Local</label>
                    <input name="localExp" type="text" className="form-control form-control-sm"/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Actualizar</button>
            </form>
        )
    }

    //Formulario para actualizar Ventas
    handleFormSales(){
        return(
            <form onSubmit={this.props.method}>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">No. Venta</label>
                    <input name="numVenta" type="number" className="form-control form-control-sm" onChange={this.handleChangeId}/>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">id Cig.</label>
                    <input name="idCigarrilloV" type="number" className="form-control form-control-sm" />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">NIF</label>
                    <input name="nifEstancoV" type="text" className="form-control form-control-sm" />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Precio</label>
                    <input name="precioVenta" type="number" className="form-control form-control-sm"/>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Cantidad</label>
                    <input name="cantidadV" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Fecha</label>
                    <input name="fechaV" type="date" className="form-control form-control-sm" />
                </div>
                <button type="submit" className="btn btn-success btn-block">Actualizar</button>
            </form>
        )
    }

    //Formulario para actualizar Manufactura
    handleFormManufacture(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Marca</label>
                    <input name="marcaM" type="text" className="form-control form-control-sm" 
                        onChange={this.handleChangeId}/>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Id Fab.</label>
                    <input name="idFabricanteM" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Carton</label>
                    <input name="carton" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <div className="form-group form-inline">
                    <label className="mr-2 label-update">Embalaje</label>
                    <input name="embalaje" type="number" className="form-control form-control-sm" 
                        />
                </div>
                <button type="submit" className="btn btn-success btn-block">Actualizar</button>
            </form>
        )
    }

    renderForms(){
       if(this.props.table==="maker"){
           return (<div>{this.handleFormMaker()}</div>)
       } 
       else if(this.props.table==="warehouse"){
           return (<div>{this.handleFormWarehouse()}</div>)
       }
       else if (this.props.table==="cigarette"){
           return (<div>{this.handleFormCigarette()}</div>)
       }
       else if (this.props.table==="purchases"){
           return (<div>{this.handleFormPurchases()}</div>)
       }
       else if (this.props.table==="watertight"){
           return (<div>{this.handleFormWatertight()}</div>)
       }else if (this.props.table==="sales"){
           return (<div>{this.handleFormSales()}</div>)
       }else {
           return (<div>{this.handleFormManufacture()}</div>)
       }
    }

    render(){
        return (
            <div className="card" >
                <div className="card-body" >
                <h4 className="card-title text-center" >Actualizando</h4>
                    {this.renderForms()}
                    <button onClick={this.handleDeleteRegister} className="mt-2 btn btn-danger btn-block">Eliminar</button>
                </div>
            </div>
        )
        
    }

}

export default FormUpdate