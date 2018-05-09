import React, {Component} from 'react';
import './Login.css'
import logo from './database.svg'

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username : null,
            password : null,
            checker : null
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUsername(event){
        this.setState({
            username : event.target.value
        })
    }

    onChangePassword(event){
        this.setState({
            password : event.target.value
        });
    }
    handleSubmit(data){

    }
    
    render(){
        return(
            <div className="container-form">
                <div className="login-box">
                    <img src={logo} className="avatar" alt="Logo" />
                    <h1>Login Here</h1>
                    <form method='POST' action="">
                        <label>Username</label>
                        <input type="text" onChange={this.onChangeUsername} name="username" placeholder="Enter Username" />
                        <label>Password</label>
                        <input type="password" onChange={this.onChangePassword} name="password" placeholder="Enter Password"/>
                        <input type="submit" value="Log In"/>
                    </form>
                    </div>
            </div>
        )
    }

}

export default Login;