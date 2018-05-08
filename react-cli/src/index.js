import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import About from "./containers/about";
import Inbox from "./containers/inbox";
import Home from "./containers/home";
import App from './App';



const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: 'about', component: About },
        { path: 'inbox', component: Inbox },
        { path: 'home', component: Home }
    ]
}

ReactDOM.render(  <Router>
    <div>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/inbox">Inbox</Link>
            </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
    </div>
</Router>, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'))