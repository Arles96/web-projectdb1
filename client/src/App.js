import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      users : []
    };
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Users</h1>
        </header>
        <ul>
          {this.state.users.map(user => 
            <li key={user.id}>{user.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
