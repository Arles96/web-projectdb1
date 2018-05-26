import React, {Component} from 'react'
import FormAdd from '../FormAdd/FormAdd';

class FormUpdate extends Component{

    constructor(){
        super()
        this.handleFormMaker = this.handleFormMaker.bind(this)
        this.handleFormCigarette = this.handleFormCigarette.bind(this)
        this.handleFormManufacture = this.handleFormManufacture.bind(this)
        this.handleFormPurchases = this.handleFormPurchases.bind(this)
        this.handleFormSales = this.handleFormSales.bind(this)
        this.handleFormWarehouse = this.handleFormWarehouse.bind(this)
        this.handleFormWatertight = this.handleFormWatertight.bind(this)
        this.handleFormOrders = this.handleFormOrders.bind(this)
        this.renderForms = this.renderForms.bind(this)
    }

    //Formulario para Agregar Fabricante
    handleFormMaker(){
        return (
            <form onSubmit={this.props.method} >
                <div className="form-group">
                    <label>Nombre</label>
                    <input name="nombreF" type="text" className="form-control" 
                        value={this.props.data.nombreF}/>
                </div>
                <div className="form-group">
                    <label>Pais</label>
                    <input name="paisF" type="text" className="form-control" 
                       value={this.props.data.paisF} />
                </div>
                <button type="submit" className="btn btn-success" >Actualizar</button>
            </form>
        )
    }

    //Formmulario para agregar Almacen
    handleFormWarehouse(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <label>Id Cigarrillo</label>
                    <input name="idCigarrilloA" type="number" className="form-control" 
                        value={this.props.data.idCigarrilloA} />
                </div>
                <div className="form-group">
                    <label>Existencia</label>
                    <input name="existencia" type="number" className="form-control" 
                        value={this.props.data.existencia}/>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        )        
    }

    //Formluario para agregar Cigarrillos
    handleFormCigarette(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <label>Id Fabricante</label>
                    <input name="idFabricanteC" type="number" className="form-control" 
                        value={this.props.data.idFabricanteC}/>
                </div>
                <div className="form-group">
                    <label>Marca</label>
                    <input name="marca" type="text" className="form-control" 
                        value={this.props.data.marca}/>
                </div>
                <div className="form-group">
                    <label>Contaminante</label>
                    <select name="contaminante" className="form-control">
                        <option value="0">Normal</option>
                        <option value="1">light</option>
                        <option value="2">superlight</option>
                        <option value="3">ultralight</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Filtro</label>
                    <select name="filtro" className="form-control">
                        <option value="0">Si</option>
                        <option value="1">No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Mentolado</label>
                    <select name="mentolado" className="form-control">
                        <option value="0">Si</option>
                        <option value="1">No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Hoja</label>
                    <select name="hoja" className="form-control">
                        <option value="0">Negra</option>
                        <option value="1">Rubia</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Pedidos
    handleFormOrders(){
        return (
            <form onSubmit={this.props.method} >
                <div className="form-group">
                    <label>id Almacen</label>
                    <input name="idAlmacenP" type="number" className="form-control" 
                        placeholder="Ingrese el id del Almacen"/>
                </div>
                <div className="form-group">
                    <label>NIF Estanco</label>
                    <input name="nifEstancoP" type="number" className="form-control" 
                        placeholder="Ingrese el nif de estanco"/>
                </div>
                <div className="form-group">
                    <label>Cantidad</label>
                    <input name="cantidad" type="number" className="form-control" 
                        placeholder="Ingrese cantidad"/>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Compras
    handleFormPurchases(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <label>id Almacen</label>
                    <input name="idAlmacenC" type="number" className="form-control" 
                        placeholder="Ingrese el id del Almacen"/>
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input name="precioC" type="number" className="form-control" 
                        placeholder="Ingrese el precio de compra"/>
                </div>
                <div className="form-group">
                    <label>Cantidad</label>
                    <input name="cantidadC" type="number" className="form-control" 
                        placeholder="Ingrese cantidad"/>
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input name="fechaC" type="date" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Estanco
    handleFormWatertight(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <label>NIF</label>
                    <input name="nifEstanco" type="text" className="form-control" 
                        placeholder="Ingrese el nif de Estanco"/>
                </div>
                <div className="form-group">
                        <label>Numero de Expendio</label>
                        <input name="numExp" type="number" className="form-control" 
                            placeholder="Ingrese el numero Expendio"/>
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input name="nombreExp" type="text" className="form-control" 
                        placeholder="Ingrese nombre"/>
                </div>
                <div className="form-group">
                    <label>Local</label>
                    <input name="localExp" type="text" className="form-control" 
                        placeholder="Ingrese local"/>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Ventas
    handleFormSales(){
        return(
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <label>NIF Estanco</label>
                    <input name="nifEstancoV" type="text" className="form-control" 
                        placeholder="Ingrese el nif Extanco"/>
                </div>
                <div className="form-group">
                    <label>id Almacen</label>
                    <input name="idAlmacenV" type="number" className="form-control" 
                        placeholder="Ingrese el id del Almacen"/>
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input name="precioVenta" type="number" className="form-control" 
                        placeholder="Ingrese precio"/>
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input name="fechaV" type="date" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Manufactura
    handleFormManufacture(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <label>id Fabricante</label>
                    <input name="idFabricanteM" type="number" className="form-control" 
                        placeholder="Ingrese el id del Fabricante"/>
                </div>
                <div className="form-group">
                    <label>Marca</label>
                    <input name="marcaM" type="text" className="form-control" 
                        placeholder="Ingrese marca"/>
                </div>
                <div className="form-group">
                    <label>Carton</label>
                    <input name="carton" type="number" className="form-control" 
                        placeholder="Ingrese numero de carton"/>
                </div>
                <div className="form-group">
                    <label>Embalaje</label>
                    <input name="embalaje" type="number" className="form-control" 
                        placeholder="Ingrese numero de embalaje"/>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
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
       else if (this.props.table=="orders"){
           return(<div>{this.handleFormOrders()}</div>)
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
        if (this.props.data){
            return (
                <div className="card" >
                    <div className="card-body" >
                    <h4 className="card-title text-center" >Agregar</h4>
                        {this.renderForms()}
                    </div>
                </div>
            )
        }else {
            return (
                <div className="card">
                    <div className="card-body" >
                        <div className="mx-auto alert alert-info " >
                            No se ha seleccionado el registro
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default FormUpdate