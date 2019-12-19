import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignInSide from './components/login/SignInSide'
import Dashboard from './components/dashboard/Dashboard'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Switch, Route } from 'react-router-dom'


ReactDOM.render(  
<BrowserRouter> 
<Switch>
    <Route path="/" exact={true} component={SignInSide} />
    <Route path="/home"  component={Dashboard} />
</Switch>

</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
