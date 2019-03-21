import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import {AppRouter} from "./router";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppRouter/>
            </div>
        );
    }

}

export default App;
