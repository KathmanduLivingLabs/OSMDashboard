import React from 'react';
import ChartistGraph from 'react-chartist';

require('./style.scss');

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
		var diff = this.props.toYear - this.props.fromYear;
		var yearLabels = [];
		if(diff > 1) {
			 ((fromYear, toYear) => {
				for(var i = 0; i <= diff; i++)
					yearLabels.push(Number(fromYear) + i);
			})(this.props.fromYear, this.props.toYear);
		} else if(diff === 1) {
			((fromYear, toYear) => {
				for(var i = 1; i <= 12; i += 4) {
					yearLabels.push(fromYear + '-' + i);
				}
				for(var i = 1; i <= 12; i += 4) {
					yearLabels.push(toYear + '-' + i);
				}
			})(this.props.fromYear, this.props.toYear)
			
		} else if(diff === 0) {
			((fromYear, toYear) => {
				for(var i = 1; i <= 12; i += 2) {
					yearLabels.push(fromYear + '-' + i);
				}
			})(this.props.fromYear, this.props.toYear);
		}

		/*
		var yearLabels = this.props.feature[0].map(function(item) {
			if((_this.props.toYear - _this.props.fromyear) > 1) {
				return years;	
			} 
			else
				return item.year;
		});
	 */

		var yearSeries = this.props.feature[0].map(function(item) {
			var data = Number(item.count);
			if(_this.props.index === 0 || _this.props.index === 1)
				//data = data / 1000;
			data = Math.round(data * 100) / 100;
			return data;
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
			lineSmooth: false,
			plugins: [
				Chartist.plugins.tooltip()
			]
		};

		return(
			<ChartistGraph data={chartData} options={options} type='Line' />
		);
	}
}
