import React, {Component} from 'react'
import axios from 'axios'
import './Table.css'

/**
 * Este tendra como atributos el datas y method
 * @argument datas sera el todos los registros de la tablan que solicitan
 * @argument method será el evento para seleccionar una fila de este componente
 */
class Table extends Component {

    constructor(){
        super()
        this.state = {
            maker : [],
            cigarette : [],
            warehouse : [],
            purchases : [],
            sales : [],
            watertight : [],
            manufacture : []
        }
        this.handleWarehouse = this.handleWarehouse.bind(this)
        this.handleMaker = this.handleMaker.bind(this)
        this.handleCigarette = this.handleCigarette.bind(this)
        this.handleManufacture = this.handleManufacture.bind(this)
        this.handlePurchases = this.handlePurchases.bind(this)
        this.handleSales = this.handleSales.bind(this)
        this.handleWatertight = this.handleWatertight.bind(this)
        this.renderTable = this.renderTable.bind(this)
        this.handleData = this.handleData.bind(this)
    }

    handleData(){
        if(this.props.entity==="maker"){
            axios.get('api/fabricantes').then(res => {
                this.setState({
                    maker : res.data.data,
                    cigarette : [],
                    warehouse : [],
                    purchases : [],
                    sales : [],
                    watertight : [],
                    manufacture : []
                })
            }).catch(err => console.log(err))
        } 
        //Actualiza almacen
        else if(this.props.entity==="warehouse"){
            axios.get('api/almacen').then(res => {
                this.setState({
                    maker : [],
                    cigarette : [],
                    warehouse : res.data.data,
                    purchases : [],
                    sales : [],
                    watertight : [],
                    manufacture : []
                })
            }).catch(err => console.log("este es un error "+ err))
        }
        //Actualizar cigarrillo
        else if (this.props.entity==="cigarette"){
            axios.get('api/cigarrillos').then(res => {
                this.setState({
                    maker : [],
                    cigarette : res.data.data,
                    warehouse : [],
                    purchases : [],
                    sales : [],
                    watertight : [],
                    manufacture : []
                })
            }).catch(err => console.log(err))
        }
        //Actualizar compra
        else if (this.props.entity==="purchases"){
            axios.get('api/compras').then(res => {
                this.setState({
                    maker : [],
                    cigarette : [],
                    warehouse : [],
                    purchases : res.data.data,
                    sales : [],
                    watertight : [],
                    manufacture : []
                })
            }).catch(err => console.log(err))
        }
        //Actualizar estanco
        else if (this.props.entity==="watertight"){
            axios.get('api/estancos').then(res => {
                this.setState({
                    maker : [],
                    cigarette : [],
                    warehouse : [],
                    purchases : [],
                    sales : [],
                    watertight : res.data.data,
                    manufacture : []
                })
            }).catch(err => console.log(err))
        }
        //Actualizar Venta
        else if (this.props.entity==="sales"){
            axios.get('api/ventas').then(res => {
                this.setState({
                    maker : [],
                    cigarette : [],
                    warehouse : [],
                    purchases : [],
                    sales : res.data.data,
                    watertight : [],
                    manufacture : []
                })
            }).catch(err => console.log(err))
        }
        //Actualizar manufactura
        else {
            axios.get('api/manufactura').then(res => {
                this.setState({
                    maker : [],
                    cigarette : [],
                    warehouse : [],
                    purchases : [],
                    sales : [],
                    watertight : [],
                    manufacture : res.data.data
                })
            }).catch(err => console.log(err))
        }
    }

    //Tabla para Fabricante
    handleMaker(){
        let data = this.state.maker.map( (doc, i) => {
            return (
                <tr key={i} >
                    <td>{doc.idFabricante}</td>
                    <td>{doc.nombreF}</td>
                    <td>{doc.pais}</td>
                </tr>
            )
        } )
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        )
    }

    //Tabla para Alamacen
    handleWarehouse(){
        if (this.state.data){
            var data1 = this.state.warehouse.map((doc, i) => {
                return (
                    <tr key={i} >
                        <td>{doc.idAlmacen}</td>
                        <td>{doc.idCigarillo}</td>
                        <td>{doc.existencia}</td>
                        <td>{doc.numFiscal}</td>
                    </tr>
                )
            })
        }
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Id Cigarrillo</th>
                        <th>Existencia</th>
                        <th>NIF</th>
                    </tr>
                </thead>
                <tbody>
                    {data1}
                </tbody>
            </table>
        )
    }

    //Tabla para Cigarrillo
    handleCigarette(){
        let data = this.state.cigarette.map((doc, i)=> {
            return (
                <tr key={i} >
                    <td>{doc.idCigarillo}</td>
                    <td>{doc.Marca}</td>
                    <td>{doc.contaminante}</td>
                    <td>{doc.filtro}</td>
                    <td>{doc.mentolado}</td>
                    <td>{doc.hoja}</td>
                </tr>
            )
        })
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Contaminante</th>
                        <th>Filtro</th>
                        <th>Mentolado</th>
                        <th>Hoja</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        )
    }

    //Tabla para Manufacura
    handleManufacture(){
        let data = this.state.manufacture.map((doc, i) => {
            return (
                <tr key={i}>
                    <td>{doc.Marca}</td>
                    <td>{doc.idFabricanteM}</td>
                    <td>{doc.Carton}</td>
                    <td>{doc.Embalaje}</td>
                </tr>
            )
        })
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Id Fabricante</th>
                        <th>Cartón</th>
                        <th>Embalaje</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        )
    }

    //Tabla para compras
    handlePurchases(){
        let data = this.state.purchases.map( (d, i) => {
            return (
                <tr key={i}>
                    <td>{d.numCompra}</td>
                    <td>{d.idCigarillo}</td>
                    <td>{d.numFiscal}</td>
                    <td>{d.precioCompra}</td>
                    <td>{d.cantidad}</td>
                    <td>{d.fecha}</td>
                </tr>
            )
        })
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>No. Compra</th>
                        <th>Id Cigarrillo</th>
                        <th>Numero Fiscal</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        )
    }

    //Tabla para estanco
    handleWatertight(){
        let data = this.state.watertight.map((d, i) => {
            return (
                <tr key={i} >
                    <td>{d.numFiscal}</td>
                    <td>{d.numExp}</td>
                    <td>{d.nombre}</td>
                    <td>{d.Provincia}</td>
                </tr>
            )
        })
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>No. Fiscal</th>
                        <th>No. Expendio</th>
                        <th>Nombre</th>
                        <th>Provincia</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        )
    }

    //Tabla para ventas
    handleSales(){
        let data = this.state.sales.map((d, i) => {
            console.log(d)
            return (
                <tr key={i} >
                    <td>{d.numVentas}</td>
                    <td>{d.numFiscal}</td>
                    <td>{d.idCigarillo}</td>
                    <td>{d.precioVenta}</td>
                    <td>{d.cantidad}</td>
                    <td>{d.fecha}</td>
                </tr>
            )
        })
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>No. Venta</th>
                        <th>Numero Fiscal</th>
                        <th>Id Cigarrillo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        )
    }

    renderTable(){
        if(this.props.entity==="maker"){
            return (<div>{this.handleMaker()}</div>)
        } 
        //Actualiza almacen
        else if(this.props.entity==="warehouse"){
            return (<div>{this.handleWarehouse()}</div>)
        }
        //Actualizar cigarrillo
        else if (this.props.entity==="cigarette"){
            return (<div>{this.handleCigarette()}</div>)
        }
        //Actualizar compra
        else if (this.props.entity==="purchases"){
            return (<div>{this.handlePurchases()}</div>)
        }
        //Actualizar estanco
        else if (this.props.entity==="watertight"){
            return (<div>{this.handleWatertight()}</div>)
        }
        //Actualizar Venta
        else if (this.props.entity==="sales"){
            return (<div>{this.handleSales()}</div>)
        }
        //Actualizar manufactura
        else {
            return (<div>{this.handleManufacture()}</div>)
        }
    }

    componentWillMount(){
        this.setState({
            data : []
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.handleData} className="btn btn-primary">Actualiza</button>
                <div className="scroll">
                    {this.renderTable()}
                </div>
            </div>
        )
    }

}

export default Table