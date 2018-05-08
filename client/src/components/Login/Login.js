import React, {Component} from 'react';
import './Login.css'
import logo from './database.svg'

class Login extends Component {

    
    render(){
        return(
            <div className="container-form">
                <div class="login-box">
                    <img src={logo} class="avatar" alt="Logo" />
                    <h1>Login Here</h1>
                    <form>
                        <label for="username">Username</label>
                        <input type="text" placeholder="Enter Username" />
                        <label for="password">Password</label>
                        <input type="password" placeholder="Enter Password"/>
                        <input type="submit" value="Log In"/>
                    </form>
                    </div>
            </div>
        )
    }

}

export default Login;