import React from "react";

export class Hello extends React.Component<obj>{
    constructor(props: obj){
        super(props);
        this.wrapper = React.createRef();
    }

    render(){
        return <div ref={this.wrapper}>
            <h1>hello world</h1>
        </div>
    }

    wrapper: React.RefObject<HTMLDivElement>;

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log(this.wrapper);
    }

    componentWillUnmount(){
        console.log('will unmount');
    }
}