import React, {Component} from 'react'

/**
 * Este tendra como atributos el datas y method
 * @argument datas sera el todos los registros de la tablan que solicitan
 * @argument method será el evento para seleccionar una fila de este componente
 */
class Table extends Component {

    constructor(){
        super()
    }

    //Tabla para Fabricante
    handleMaker(){
        return (
            <table className="table table-hover" >
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>País</th>
                </thead>
            </table>
        )
    }

    //Tabla para Alamacen
    handleWarehouse(){
        return (
            <table className="table table-hover" >
                <thead>
                    <th>ID</th>
                    <th>Id Cigarrillo</th>
                    <th>Existencia</th>
                    <th>Numero Fiscal Estanco</th>
                </thead>
            </table>
        )
    }

    //Tabla para Cigarrillo
    handleCigarette(){
        return (
            <table className="table table-hover" >
                <thead>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Contaminante</th>
                    <th>Filtro</th>
                    <th>Mentolado</th>
                    <th>Hoja</th>
                </thead>
            </table>
        )
    }

    //Tabla para Manufacura
    handleManufacture(){
        return (
            <table className="table table-hover" >
                <thead>
                    <th>Marca</th>
                    <th>Id Fabricante</th>
                    <th>Cartón</th>
                    <th>Embalaje</th>
                </thead>
            </table>
        )
    }

    //Tabla para compras
    handlePurchases(){
        return (
            <table className="table table-hover" >
                <thead>
                    <th>No. Compra</th>
                    <th>Id Cigarrillo</th>
                    <th>Numero Fiscal</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                </thead>
            </table>
        )
    }

    //Tabla para estanco
    handleWatertight(){
        return (
            <table className="table table-hover" >
                <thead>
                    <th>Numero Fiscal</th>
                    <th>Numero Expendio</th>
                    <th>Nombre</th>
                    <th>Provincia</th>
                </thead>
            </table>
        )
    }

    //Tabla para ventas
    handleSales(){
        return (
            <table className="table table-hover" >
                <thead>
                    <th>No. Venta</th>
                    <th>Numero Fiscal</th>
                    <th>Id Cigarrillo</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                </thead>
            </table>
        )
    }

    render(){
        return (
            <h1>Hola</h1>
        )
    }

}

export default Table