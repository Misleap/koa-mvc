const echarts = require('echarts');

var fn_chart = async(ctx, next) => {
	ctx.response.body = `<h1>chart 1</h1>
		<div id="main"></div>
	`;
	console.log('chart init succeedly');
	var myChart = echarts.init(document.getElementById('main'));

	myChart.setOption({
		title: { text: 'ECharts 入门示例' },
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        data: [5, 20, 36, 10, 10, 20]
		    }]

	});
}


module.exports = {
	'GET /chart': fn_chart
}