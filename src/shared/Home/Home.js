import React, {Component} from 'react'
import './Home.css'
import logo from '../img/logo.svg'
import Database from '../Database/Database'
import Container from '../Container/Container'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            cigarette : false,
            maker : false,
            purchases : false,
            sales : false,
            watertight : false,
            Manufacture : false,
            home : true,
            warehouse : false,
            queries : false,
        }
        this.handleComponent = this.handleComponent.bind(this)
        this.handleCigarette = this.handleCigarette.bind(this)
        this.handleMaker = this.handleMaker.bind(this)
        this.handlePurchases = this.handlePurchases.bind(this)
        this.handleSales = this.handleSales.bind(this)
        this.handleWatertight = this.handleWatertight.bind(this)
        this.handleManufacture = this.handleManufacture.bind(this)
        this.handleHome = this.handleHome.bind(this)
        this.handleWarehouse = this.handleWarehouse.bind(this)
        this.handleQueries = this.handleQueries.bind(this)
    }

    handleComponent(){
        if (this.state.cigarette) {
            return (<Database entity="cigarette" title="Cigarrillo" />)
        }
        else if (this.state.maker) {
            return (<Database entity="maker" title="Fabricante"/>)
        }
        else if (this.state.purchases){
            return (<Database entity="purchases" title="Compras"/>)
        }
        else if (this.state.sales){
            return (<Database entity="sales" title="Ventas"/>)
        }
        else if (this.state.watertight){
            return (<Database entity="watertight" title="Estanco"/>)
        }
        else if (this.state.Manufacture){
            return (<Database entity="Manufacture" title="Manufactura"/>)
        }
        else if (this.state.home) {
            return (<Container topic="home" />)
        }
        else if (this.state.queries){
            return (<Container topic="consult" />)
        }
        else {
            return (<Database entity="warehouse" title="Almacen"/>)
        }
    }

    handleCigarette(){
        this.setState({
            cigarette : true,
            marker : false,
            purchases : false,
            sales : false,
            watertight : false,
            Manufacture : false,
            home : false,
            warehouse : false,
            queries : false
        })
    }

    handleMaker(){
        this.setState({
            cigarette : false,
            maker : true,
            purchases : false,
            sales : false,
            watertight : false,
            Manufacture : false,
            home : false,
            warehouse : false,
            queries : false
        })
    }

    handlePurchases(){
        this.setState({
            cigarette : false,
            maker : false,
            purchases : true,
            sales : false,
            watertight : false,
            Manufacture : false,
            home : false,
            warehouse : false,
            queries : false
        })
    }

    handleSales(){
        this.setState({
            cigarette : false,
            maker : false,
            purchases : false,
            sales : true,
            watertight : false,
            Manufacture : false,
            home : false,
            warehouse : false,
            queries : false
        })
    }

    handleWatertight(){
        this.setState({
            cigarette : false,
            maker : false,
            purchases : false,
            sales : false,
            watertight : true,
            Manufacture : false,
            home : false,
            warehouse : false,
            queries : false
        })
    }

    handleManufacture(){
        this.setState({
            cigarette : false,
            maker : false,
            purchases : false,
            sales : false,
            watertight : false,
            Manufacture : true,
            home : false,
            warehouse : false,
            queries : false
        })
    }

    handleHome(){
        this.setState({
            cigarette : false,
            maker : false,
            purchases : false,
            sales : false,
            watertight : false,
            Manufacture : false,
            home : true,
            warehouse : false,
            queries : false
        })
    }

    handleWarehouse(){
        this.setState({
            cigarette : false,
            maker : false,
            purchases : false,
            sales : false,
            watertight : false,
            Manufacture : false,
            home : false,
            warehouse : true,
            queries : false
        })
    }

    handleQueries(){
        this.setState({
            cigarette : false,
            maker : false,
            purchases : false,
            sales : false,
            watertight : false,
            Manufacture : false,
            home : false,
            warehouse : false,
            queries : true
        })
    }

    render(){
        return (
            <div className="row m-0">
                <div id="style-2" className="col-md-2 menu p-0">
                    <div className="menu-home" onClick={this.handleHome}>
                        <img src={logo} className="App-logo"/>
                        <h5 className="m-3">Teoria de Base de Datos II</h5>
                    </div>
                    <div className="menu-nav pt-4" onClick={this.handleMaker}>Fabricantes</div>
                    <div className="menu-nav pt-4" onClick={this.handleCigarette}>Cigarrillos</div>
                    <div className="menu-nav pt-4" onClick={this.handleWarehouse}>Almacen</div>
                    <div className="menu-nav pt-4" onClick={this.handlePurchases}>Compras</div>
                    <div className="menu-nav pt-4" onClick={this.handleSales}>Ventas</div>
                    <div className="menu-nav pt-4" onClick={this.handleWatertight}>Estancos</div>
                    <div className="menu-nav pt-4" onClick={this.handleManufacture}>Manufactura</div>
                    <div className="menu-nav pt-4" onClick={this.handleQueries} >Consultas</div>
                    <div className="menu-nav pt-4">Salir</div>
                </div>
                <div className="col-md-10">
                    {this.handleComponent()}
                </div>
            </div>
        );
    }

}

export default Home;