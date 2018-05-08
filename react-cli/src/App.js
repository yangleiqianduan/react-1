import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./containers/about";
import Inbox from "./containers/inbox";
import Home from "./containers/home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {route: window.location.hash.substr(1)};
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        let Child
        switch (this.state.route) {
            case '/about':
                Child = About;
                break;
            case '/inbox':
                Child = Inbox;
                break;
            default:
                Child = Home;
        }

        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/inbox">Inbox</a></li>
                    <li><a href="#/home">Home</a></li>
                </ul>
                <Child/>
            </div>
        )
    }
}

export default App;
