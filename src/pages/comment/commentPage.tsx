import React, {Component} from "react";
import './comment.scss';
import {CommentInput} from "./commentInput";
import {CommentList} from "./commentList";
import {ICommentProp} from "./comment";

interface State {
    list: ICommentProp[];
}

export class CommentPage extends Component<obj, State>{
    constructor(props: obj){
        super(props);
        this.state = {
            list: []
        }
    }

    submitHandler = (state: ICommentProp) => {
        this.setState((prevState) => {
            let list = prevState.list.concat(state);
            localStorage.setItem('commentList', JSON.stringify(list));
            return {
                list: list
            }
        })
    };

    componentWillMount(){
        let list = localStorage.getItem('commentList');
        if(list){
            this.setState({
                list: JSON.parse(list)
            })
        }
    }

    render(){
        return <div className="comment-page">
            <CommentInput onSubmit={this.submitHandler}/>
            <CommentList comments={this.state.list}/>
        </div>
    }
}