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

class Database extends Component {

    constructor(){
        super()
        this.state = {
            form : true,
            linkAdd : "nav-link active",
            linkUpdate : "nav-link",
            data : null
        }
        this.handleIcon = this.handleIcon.bind(this)
        this.handleForms = this.handleForms.bind(this)
        this.eventItemAdd = this.eventItemAdd.bind(this)
        this.eventItemUpdate = this.eventItemUpdate.bind(this)
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
            return (<FormAdd table={this.props.entity} /> )
        }else {
            return (<FormUpdate table={this.props.entity} data={this.state.data}/> )
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