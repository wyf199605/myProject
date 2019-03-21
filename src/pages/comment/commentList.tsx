import React, {Component} from "react";
import {Comment, ICommentProp} from "./comment";

interface ICommentListProp{
    comments: ICommentProp[];
    onDeleteComment: (index: number) => void;
}

export class CommentList extends Component<ICommentListProp>{

    static defaultProps: Partial<ICommentListProp> = {
        comments: []
    };

    render(){
        let {
            comments,
            onDeleteComment
        } = this.props;
        return <div className="comment-list">
            {comments.map((comment, index) => {
                return <Comment key={index} {...comment} onDeleteComment={() => {
                    onDeleteComment && onDeleteComment(index);
                }}/>
            })}
        </div>
    }
}