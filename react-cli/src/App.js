import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./containers/about";
import Inbox from "./containers/inbox";
import Home from "./containers/home";

import { Router, Route, Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><link href="#/about">About</link></li>
                    <li><link href="#/inbox">Inbox</link></li>
                    <li><link href="#/home">Home</link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App;
