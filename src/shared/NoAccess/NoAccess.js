import React, {Component}  from 'react'
import { DEFAULT_ECDH_CURVE } from 'tls';

class NoAccess extends Component {

    render(){
        return (
            <div>
                Acceso Denegado
            </div>
        )
    }
}

export default NoAccess