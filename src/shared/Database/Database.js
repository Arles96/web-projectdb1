import React, {Component} from 'react'
import FormAdd from '../FormAdd/FormAdd'
import FormUpdate from '../FormUpdate/FormUpdate'

class Database extends Component {

    constructor(){
        super()
    }

    render(){
        return (
            <div className="row" >
                <div className="col-md-8">
                </div>
                <div className="col-md-4" >
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center" >Agregar</h4>
                            <FormAdd table={this.props.entity} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center" >Actualizar</h4>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Database