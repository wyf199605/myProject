import React, {Component} from "react";

export interface ICommentProp{
    username: string;
    content: string;
    time: number;
}

interface Props extends ICommentProp{
    onDeleteComment: Function;
}

export class Comment extends Component<Props, {timeString: string}>{

    constructor (props: Props) {
        super(props);
        this.state = {
            timeString: ''
        };
    }

    protected timer: any;

    componentWillMount(){
        this.setTimeString();
        this.timer = setInterval(() => {
            this.setTimeString();
        }, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    protected setTimeString(){
        const time = this.props.time;
        const duration = (+Date.now() - time) / 1000;
        if(!isNaN(duration)){
            this.setState({
                timeString: duration > 60
                    ? `${Math.round(duration / 60)} 分钟前`
                    : `${Math.round(Math.max(duration, 1))} 秒前`
            })
        }
    }

    render(){
        let {
            username,
            content,
            onDeleteComment
        } = this.props;

        let contentList = content.match(/\`[\w\W]+\`|[\w\W]+/g);

        return <div className="comment">
            <span className="comment-user">
                <span>{username}</span>
                <i>：</i>
            </span>
            <span className="comment-content">
                {contentList && contentList.map((str, index) => {
                    return /^`[\w\W]+`$/.test(str)
                        ? <code key={index}>{str.slice(1, str.length - 1)}</code>
                        : <span key={index}>{str}</span>;
                })}
            </span>
            <div>
                <time>{this.state.timeString}</time>
            </div>
            <button onClick={() => {onDeleteComment && onDeleteComment()}}>删除</button>
        </div>
    }
}
