import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import routes from './routes';
import Home from './Home/Home';
import Login from './Login/Login';

const App = ()=> {
  return (
    <Switch>
      {routes.map(({ path, exact, component: Component, ...rest }) => (
        <Route key={path} path={path} exact={exact} render={(props) => (
          <Component {...props} {...rest} />
        )} />
      ))}
    </Switch>
  );
}

export default App;
