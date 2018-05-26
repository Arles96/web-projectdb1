import React, {Component} from 'react'
import './FormAdd.css'

class FormAdd extends Component {

    constructor(){
        super()
        this.handleFormMaker = this.handleFormMaker.bind(this)
        this.handleFormCigarette = this.handleFormCigarette.bind(this)
        this.handleFormManufacture = this.handleFormManufacture.bind(this)
        this.handleFormPurchases = this.handleFormPurchases.bind(this)
        this.handleFormSales = this.handleFormSales.bind(this)
        this.handleFormWarehouse = this.handleFormWarehouse.bind(this)
        this.handleFormWatertight = this.handleFormWatertight.bind(this)
        this.renderForms = this.renderForms.bind(this)
    }

    //Formulario para Agregar Fabricante
    handleFormMaker(){
        return (
            <form onSubmit={this.props.method} >
                <div className="form-group">
                    <input name="nombreF" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese el nombre"/>
                </div>
                <div className="form-group">
                    <input name="paisF" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese el pais"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Agregar</button>
            </form>
        )
    }

    //Formmulario para agregar Almacen
    handleFormWarehouse(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <input name="idCigarrilloA" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese el id cigarrillo"/>
                </div>
                <div className="form-group">
                    <input name="existencia" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese cantidad en existencia"/>
                </div>
                <div className="form-group">
                    <input name="nifEstancoA" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese número fiscal del estanco"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Agregar</button>
            </form>
        )        
    }

    //Formluario para agregar Cigarrillos
    handleFormCigarette(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group form-inline">
                    <div>
                        <label className="mr-3 label-add">Id Fabricante:</label>
                    </div>
                    <input name="idFabricanteC" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese id Fabricante"/>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-3 label-add">Marca</label>
                    <input name="marca" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese marca"/>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-3 label-add">Contaminante</label>
                    <select name="contaminante" className="form-control form-control-sm">
                        <option value="0">Normal</option>
                        <option value="1">light</option>
                        <option value="2">superlight</option>
                        <option value="3">ultralight</option>
                    </select>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-3 label-add">Filtro</label>
                    <select name="filtro" className="form-control form-control-sm">
                        <option value="0">Si</option>
                        <option value="1">No</option>
                    </select>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-3 label-add">Mentolado</label>
                    <select name="mentolado" className="form-control form-control-sm">
                        <option value="0">Si</option>
                        <option value="1">No</option>
                    </select>
                </div>
                <div className="form-group form-inline">
                    <label className="mr-3 label-add">Hoja</label>
                    <select name="hoja" className="form-control form-control-sm">
                        <option value="0">Negra</option>
                        <option value="1">Rubia</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Compras
    handleFormPurchases(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <input name="idCigarrilloC" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese id Cigarrillo"/>
                </div>
                <div className="form-group">
                    <input name="precioC" type="number" step="any" className="form-control form-control-sm" 
                        placeholder="Ingrese precio de compra"/>
                </div>
                <div className="form-group">
                    <input name="cantidadC" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese cantidad"/>
                </div>
                <div className="form-group">
                    <input name="fechaC" type="date" className="form-control form-control-sm" />
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
                    <input name="nifEstanco" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese el nif de Estanco"/>
                </div>
                <div className="form-group">
                        <input name="numExp" type="number" className="form-control form-control-sm" 
                            placeholder="Ingrese el numero Expendio"/>
                </div>
                <div className="form-group">
                    <input name="nombreExp" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese nombre"/>
                </div>
                <div className="form-group">
                    <input name="localExp" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese local"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Ventas
    handleFormSales(){
        return(
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <input name="nifEstancoV" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese el nif Extanco"/>
                </div>
                <div className="form-group">
                    <input name="idCigarrilloV" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese id Cigarrillo"/>
                </div>
                <div className="form-group">
                    <input name="precioVenta" type="number" step="any" className="form-control form-control-sm" 
                        placeholder="Ingrese precio"/>
                </div>
                <div className="form-group">
                    <input name="fechaV" type="date" className="form-control form-control-sm" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Agregar</button>
            </form>
        )
    }

    //Formulario para agregar Manufactura
    handleFormManufacture(){
        return (
            <form onSubmit={this.props.method}>
                <div className="form-group">
                    <input name="idFabricanteM" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese el id del Fabricante"/>
                </div>
                <div className="form-group">
                    <input name="marcaM" type="text" className="form-control form-control-sm" 
                        placeholder="Ingrese marca"/>
                </div>
                <div className="form-group">
                    <input name="carton" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese numero de carton"/>
                </div>
                <div className="form-group">
                    <input name="embalaje" type="number" className="form-control form-control-sm" 
                        placeholder="Ingrese numero de embalaje"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Agregar</button>
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
       else if (this.props.table=="Manufacture"){
           return(<div>{this.handleFormManufacture()}</div>)
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
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title text-center" >Agregar</h4>
                    {this.renderForms()}
                </div>
            </div>
        )
    }

}

export default FormAdd