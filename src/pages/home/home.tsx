import React from "react";
import {Link} from "react-router-dom";
import './home.scss'
import {Hello} from "./hello";

interface State{
    isShow: boolean;
}

export class HomePage extends React.Component<obj, State>{
    constructor(props: obj){
        super(props);
        this.state = {
            isShow: true
        }
    }

    clickHandler = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    };

    render(){
        const users = [
            { username: 'Jerry', age: 21, gender: 'male' },
            { username: 'Tomy', age: 22, gender: 'male' },
            { username: 'Lily', age: 19, gender: 'female' },
            { username: 'Lucy', age: 20, gender: 'female' }
        ];
        return <div className="home">
            <button onClick={this.clickHandler}>toggle</button>
            {this.state.isShow ? <Hello/> : null}
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
                <li>
                    <Link to='comment'>comment</Link>
                </li>
            </ul>

            {users.map((user, index) => (<User key={index} {...user}/>))}
        </div>
    }
}

interface IUserProp{
    username: string;
    gender: string;
    age: number;
}

class User extends React.Component<IUserProp>{
    render(){
        let {
            username,
            age,
            gender
        } = this.props;
        return <div>
            <div>姓名：{username}</div>
            <div>年龄：{age}</div>
            <div>性别：{gender}</div>
        </div>
    }
}