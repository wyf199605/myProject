import React, {Component} from "react";
import {ICommentProp} from "./comment";

interface Props{
    onSubmit?: (state: ICommentProp) => void
}

interface State{
    username: string;
    content: string;
}

export class CommentInput extends Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            username: localStorage.getItem('username') || '',
            content: '',
        };
    }

    protected textarea: HTMLTextAreaElement;

    clickHandler = () => {
        let onSubmit = this.props.onSubmit,
            {
                username,
                content
            } = this.state;

        if(!username){
            alert('用户名不能为空');
            return;
        }
        if(!content){
            alert('评论内容不能为空');
            return;
        }

        onSubmit && onSubmit({
            username,
            content,
            time: (new Date()).getTime()
        });
        this.setState({
            content: ''
        });
    };

    usernameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: ev.target.value
        });
    };
    contentChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            content: ev.target.value
        });
    };

    blurHandler = () => {
        localStorage.setItem('username', this.state.username);
    };

    render(){
        return <div className="comment-form">
            <div className="form-control">
                <label htmlFor="#">用户名：</label>
                <input type="text" onBlur={this.blurHandler} value={this.state.username} onChange={this.usernameChange}/>
            </div>
            <div className="form-control">
                <label htmlFor="#">评论内容：</label>
                <textarea ref={(el) => this.textarea = el} value={this.state.content} onChange={this.contentChange}/>
            </div>
            <button onClick={this.clickHandler}>发布</button>
        </div>
    }

    componentDidMount(){
        this.textarea.focus();
    }
}