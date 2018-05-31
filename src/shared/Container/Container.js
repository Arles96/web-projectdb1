import React, {Component} from 'react'
import './Container.css'
import axios from 'axios'

class Container extends Component {

    constructor(){
        super()
        this.state = {
            consulta1 : [],
            consulta2 : [],
            consulta3 : [],
            consulta4 : [],
            consulta5 : [],
            consulta9 : []
        }
        this.handleHome = this.handleHome.bind(this)
        this.handleQuerie = this.handleQuerie.bind(this)
        this.handleConsult1 = this.handleConsult1.bind(this)
        this.handleConsult2 = this.handleConsult2.bind(this)
        this.handleConsult3 = this.handleConsult3.bind(this)
        this.handleConsult4 = this.handleConsult4.bind(this)
        this.handleConsult5 = this.handleConsult5.bind(this)
        this.handleConsult9 = this.handleConsult9.bind(this)
        this.renderConsult1 = this.renderConsult1.bind(this)
        this.renderConsult2 = this.renderConsult2.bind(this)
        this.renderConsult3 = this.renderConsult3.bind(this)
        this.renderConsult4 = this.renderConsult4.bind(this)
        this.renderConsult5 = this.renderConsult5.bind(this)
        this.renderConsult9 = this.renderConsult9.bind(this)
    }

    handleConsult1(){
        axios.get('/api/consulta1')
            .then(res => {
                this.setState({
                    consulta1 : res.data.consulta
                })
            })
            .catch(err=> console.log(err))
    }

    handleConsult2(){
        axios.get('/api/consulta2')
            .then(res => {
                this.setState({
                    consulta2 : res.data.consulta
                })
            })
            .catch(err=> console.log(err))
    }

    handleConsult3(){
        axios.get('/api/consulta3')
            .then(res => {
                this.setState({
                    consulta3 : res.data.consulta
                })
            })
            .catch(err=> console.log(err))
    }

    handleConsult4(){
        axios.get('/api/consulta4')
            .then(res => {
                this.setState({
                    consulta4 : res.data.consulta
                })
            })
            .catch(err=> console.log(err))
    }

    handleConsult5(){
        axios.get('/api/consulta5')
            .then(res => {
                this.setState({
                    consulta5 : res.data.consulta
                })
            })
            .catch(err=> console.log(err))
    }

    handleConsult9(){
        axios.get('/api/consulta9')
            .then(res => {
                this.setState({
                    consulta9 : res.data.consulta
                })
            })
            .catch(err=> console.log(err))
    }

    renderConsult1(){
        if (this.state.consulta1){
            let data = this.state.consulta1.map((doc, i)=> {
                return (
                    <li key={i}>Marca: {doc.Marca}, Pais: {doc.Pais} </li>
                )
            })
            return (
                <ul>
                    {data}
                </ul>
            )
        }
    }

    renderConsult2(){
        if (this.state.consulta2){
            let data = this.state.consulta2.map((doc, i)=> {
                return (
                    <li key={i}>Importe de las compras: {doc["Importe de las Compras"]}</li>
                )
            })
            return (
                <ul>
                    {data}
                </ul>
            )
        }
    }

    renderConsult3(){
        if (this.state.consulta3){
            let data = this.state.consulta3.map((doc, i)=> {
                return (
                    <li key={i}>Venta en Madrid de Ducados: {doc["Venta en Madrid de Ducados"]} </li>
                )
            })
            return (
                <ul>
                    {data}
                </ul>
            )
        }
    }

    renderConsult4(){
        if (this.state.consulta4){
            let data = this.state.consulta4.map((doc, i)=> {
                return (
                    <li key={i}>Venta: {doc["SUM(ven.cantidad)"]}, Marca : {doc.Marca} </li>
                )
            })
            return (
                <ul>
                    {data}
                </ul>
            )
        }
    }

    renderConsult5(){
        if (this.state.consulta5){
            let data = this.state.consulta5.map((doc, i)=> {
                return (
                    <li key={i}>Ingresos {doc.Ingresos} </li>
                )
            })
            return (
                <ul>
                    {data}
                </ul>
            )
        }
    }

    renderConsult9(){
        if (this.state.consulta9){
            let data = this.state.consulta9.map((doc, i)=> {
                console.log(doc)
                return (
                    <li key={i}>NIF: {doc.numFiscal}, nombre: {doc.nombre} </li>
                )
            })
            return (
                <ul>
                    {data}
                </ul>
            )
        }
    }

    handleQuerie(){
        return (
            <div>
                <h1 className="text-center" >Consultas</h1>
                <div>
                    <h2>Consulta 1</h2>
                    <p>Obtener todas las marcas de cigarrillos extranjeros.</p>
                    <button onClick={this.handleConsult1} className="btn btn-success" >Ejecutar</button>
                    <br/>
                    <br/>
                    {this.renderConsult1()}
                </div>
                <div>
                    <h2>Consulta 2</h2>
                    <p>
                        Obtener el valor de todas las compras realizadas por
                         el estanco '11111' de la marca 'Camel' desde el año 1996 hasta la fecha. 
                    </p>
                    <button onClick={this.handleConsult2} className="btn btn-success" >Ejecutar</button>
                    <br/>
                    <br/>
                    {this.renderConsult2()}
                </div>
                <div>
                    <h2>Consulta 3</h2>
                    <p>
                        Obtener el valor de todas las ventas de la marca 'Ducados' 
                        que han realizado los estancos de la provincia de Madrid. 
                    </p>
                    <button onClick={this.handleConsult3} className="btn btn-success" >Ejecutar</button>
                    <br/>
                    <br/>
                    {this.renderConsult3()}
                </div>
                <div>
                    <h2>Consulta 4</h2>
                    <p>
                        Obtener la marca de cigarrillos estadounidense que vende más cigarrillos
                    </p>
                    <button onClick={this.handleConsult4} className="btn btn-success" >Ejecutar</button>
                    <br/>
                    <br/>
                    {this.renderConsult4()}
                </div>
                <div>
                    <h2>Consulta 5</h2>
                    <p>Obtener los ingresos por ventas de la marca ‘winston’ el 22 de agosto de 1995</p>
                    <button onClick={this.handleConsult5} className="btn btn-success" >Ejecutar</button>
                    <br/>
                    <br/>
                    {this.renderConsult5()}
                </div>
                <div>
                    <h2>Consulta 9</h2>
                    <p>
                        Obtener el nombre y el NIF de todos los estancos de Madrid que no venden
                        cigarrillos Winston con mentol, pero sí Celtas sin filtro
                    </p>
                    <button onClick={this.handleConsult9} className="btn btn-success" >Ejecutar</button>
                    <br/>
                    <br/>
                    {this.renderConsult9()}
                </div>
            </div>
        )
    }

    handleHome(){
        return (
            <div>
                <h1 className="text-center" >Bienvenido</h1>
                <p>
                    En este documento se presentará el plan de trabajo y diseño
                    del primer proyecto de la clase de Teoría de Base de Datos II. 
                    El proyecto consiste en un sistema de manejo de inventario de cigarrillos en 
                    diferentes estancos, se maneja tanto la compra como la venta.
                </p>
                <p>
                    La interfaz principal se hará con java usando la base de datos Oracle después de 
                    hacer la base de datos en Oracle se migrará a MySQL y la parte del cliente será web.
                </p>
            </div>
        )
    }

    render(){
        if (this.props.topic==="home"){
            return (
                <div>{this.handleHome()}</div>
            )
        }else {
            return(
                <div className="consult" >{this.handleQuerie()}</div>
            )
        }
    }
}

export default Container