import React from "react";
import {Link} from "react-router-dom";
import './home.scss'

export class HomePage extends React.Component{
    render(){
        return <div className="home">
            <ul>
                <li>
                    <Link to='home'>home</Link>
                </li>
                <li>
                    <Link to='test'>test</Link>
                </li>
                <li>
                    <Link to='chart'>chart</Link>
                </li>
            </ul>
        </div>
    }
}