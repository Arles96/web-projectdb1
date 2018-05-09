import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';

export default ()=> (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Login} />
            <Route path="/Home" exact component={Home}/>
        </div>
    </BrowserRouter>
);