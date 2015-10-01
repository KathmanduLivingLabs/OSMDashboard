import React from 'react';
import ChartistGraph from 'react-chartist';

require('./style.scss');

const CHART_TITLE = ['Roads', 'Waterways', 'Educational Institutes', 'Buildings', 'Health Services',
						'Financial Institutions', 'Government Offices', 'Historic Sites', 'Natural Heritages',
						'Tourist Interest', 'Settlements', 'e_i_y', 'Users'];
var chartData = [];
export default class Charts extends React.Component {
	componentDidMount() {
		this.props.incrementChildCount();
	}

	render() {
		var _this = this;
		var yearLabels = this.props.feature[0].map(function(item) {
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
					if(_this.props.index === 0)
						return (value / 1000);
					else
						return value;
				}
			}
		};

		return(
			<div className='all-charts'>
				<span className="chart-title">{CHART_TITLE[this.props.index]}</span>
				<ChartistGraph data={chartData} options={options} type='Line' />
			</div>
		);
	}
}
