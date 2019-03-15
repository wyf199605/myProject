import echarts from 'echarts';

interface IChartOption {
    title?: echarts.EChartTitleOption;
    tooltip?: echarts.EChartOption.Tooltip;
}

interface ChartData {
    name: string;
    value: number;
    field?: obj;
}

export interface IPieOption extends IChartOption {
    data: ChartData[];
}

export interface ILineOption extends IChartOption {
    data: ChartData[][];
}

export class Chart {
    static drawPie(canvas: HTMLDivElement, option: IPieOption): echarts.ECharts {
        let chart = echarts.init(canvas);
        chart.setOption({
            title: option.title,
            tooltip: option.tooltip || {},
            legend: {},
            series: [
                {
                    type: 'pie',
                    roseType: false,
                    data: option.data
                }
            ],
        });
        return chart;
    }

    static drawLine(canvas: HTMLDivElement, option: ILineOption) {
        let chart = echarts.init(canvas);
        chart.setOption({
            title: option.title,
            tooltip: option.tooltip || {},
            series: option.data.map((data, index): echarts.EChartOption.SeriesLine => {
                return {
                    type: 'line',
                    coordinateSystem: 'cartesian2d',
                    data: data,
                    xAxisIndex: index
                }
            }),
            yAxis: [
                {
                    type: 'value',
                    name: '成绩'
                },
                {
                    type: 'value',
                    name: '成绩'
                }
            ],
            xAxis: option.data.map((data): echarts.EChartOption.XAxis => {
                return {
                    type: 'category',
                    data: data.map((a) => a.name)
                }
            }),
            dataZoom: []
        })
    }

}