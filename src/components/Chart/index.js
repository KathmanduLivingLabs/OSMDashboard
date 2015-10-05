import React from 'react';
import ChartistGraph from 'react-chartist';

require('./style.scss');

/*
const CHART_TITLE = ['Roads', 'Waterways', 'Educational Institutes', 'Buildings', 'Health Services',
						'Financial Institutions', 'Government Offices', 'Historic Sites', 'Natural Heritages',
						'Tourist Interest', 'Settlements', 'Map Contirbutions', 'Users'];
*/

const CHART_TITLE = [
	{main_title: 'Roads', y_axis: 'Kilometers'},
	{main_title: 'Waterways', y_axis: 'Kilometers'},
	{main_title: 'Educational Institute', y_axis: 'No. of Educational Institute Edited'},
	{main_title: 'Buildings', y_axis: 'No. of Buildings Edited'},
	{main_title: 'Health Services', y_axis: 'No. of Health Services Edited'},
	{main_title: 'Financial Institutions', y_axis: 'No. of Financial Institutions Edited'},
	{main_title: 'Government Offices', y_axis: 'No of. Government Offices Edited'},
	{main_title: 'Historic Sites', y_axis: 'No. of Historic Sites Edited'},
	{main_title: 'Natural Heritage', y_axis: 'No. of Natural Heritage Edited'},
	{main_title: 'Tourist Interest', y_axis: 'No. Tourist Interest Edited'},
	{main_title: 'Settlements', y_axis: 'No. of Settlements Edited'},
	{main_title: 'Map Contirbutions', y_axis: 'No. of Map Contributions'},
	{main_title: 'Users', y_axis: 'No. of Users'},
]
var chartData = [];
export default class Charts extends React.Component {
	componentDidMount() {
		this.props.incrementChildCount();
	}

	render() {
		var _this = this;
		var yearLabels = this.props.feature[0].map(function(item) {
			if((_this.props.toYear - _this.props.fromyear) > 2)
				return item.year.split('-')[0];
			else
				return item.year;
		});

		var yearSeries = this.props.feature[0].map(function(item) {
			return Number(item.count);
		});

		chartData = {
			labels: yearLabels,
			series: [
				yearSeries
			]
		};
		
		var options = {
			axisX: {
				showGrid: false
			},
			axisY: {
				labelInterpolationFnc: function(value) {
					if(_this.props.index === 0 || _this.props.index === 1)
						return (value / 1000);
					else
						return value;
				}
			},
			lineSmooth: false
		};

		return(
			<ChartistGraph data={chartData} options={options} type='Line' />
		);
	}
}
