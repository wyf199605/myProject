import React from "react";
import echarts from 'echarts';

export class TestPage extends React.Component{
    constructor(props: obj){
        super(props);
        this.canvas = React.createRef();
    }

    protected canvas: React.RefObject<HTMLCanvasElement>;

    render(){
        return <div>
            <canvas ref={this.canvas} id="canvas"/>
        </div>
    }

    componentDidMount(){
        let myChart: echarts.ECharts = echarts.init(this.canvas.current);
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
}