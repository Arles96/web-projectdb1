import React, {Component} from 'react'
import './Login.css'
import logo from '../img/database.svg'
import axios from 'axios'

class Login extends Component {

    constructor(){
        super();
        this.state = {
            checker : true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNotification = this.handleNotification.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(e.target.username.value)
        axios.post('/api/login', {
            username : e.target.username.value,
            password : e.target.password.value
        })
        .then((res)=>{
            if(res.data.login){
                this.setState({checker : true})
                location.href = '/Menu'
            }
            else {
                this.setState({checker : false})
            }
        })
        .catch((err)=>{
            this.setState({checker : false})
        })
    }

    handleNotification(){
        if (!this.state.checker){
            return (<div className="alert alert-danger alert-login">Error en el usuario o contraseña</div>)
        }
    }
    
    render(){
        return(
            <div className="container-form">
                <div className="login-box">
                    <img src={logo} className="avatar" alt="Logo" />
                    <h1>Login Here</h1>
                    <form method='POST' onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Enter Username" />
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <input type="submit" value="Log In"/>
                        {this.handleNotification()}
                    </form>
                    </div>
            </div>
        )
    }

}

export default Login