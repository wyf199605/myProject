import echarts from 'echarts';
import React from 'react';
import {Chart} from "../../utils/chart";

export class ChartPage extends React.Component{
    constructor(props: obj){
        super(props);
        this.wrapper = React.createRef();
    }

    protected wrapper: React.RefObject<HTMLDivElement>;

    render(){
        return <div ref={this.wrapper} className="chart-page" style={{
            height: '300px',
            width: '400px',
        }}>
        </div>
    }

    componentDidMount(){

        Chart.drawLine(this.wrapper.current, {
            title: {
                text: 'test'
            },
            data: [
                [
                    {
                        name: 'test1',
                        value: 10
                    },
                    {
                        name: 'test2',
                        value: 20
                    },
                    {
                        name: 'test3',
                        value: 30
                    }
                ]
            ]
        })
    }
}