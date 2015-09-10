var React = require('react');
require('./style.scss');

var chartData = [];
export default class Charts extends React.Component {
	constructor() {
		buildings: []
	}
	componentDidMount() {
		this.setChartData();
		this.makeChart(chartData[0], 'M', '#chart_1');
		this.makeChart(chartData[1], 'K', '#chart_2');
		this.makeChart(chartData[2], '', '#chart_3');
	}

	setBuildings(buildings) {
		this.setState({
			buildings: buildings
		});
	}
	

	// sets chart data and options for all charts 
	setChartData() {
		var _this = this;
		var apiURL = 'http://45.55.246.231:3000/api/buildings?from=';
		apiURL += this.props.fromYear + '&to=';
		apiURL += this.props.toYear + '&bbox=' + this.props.bbox;
		apiURL = 'http://45.55.246.231:3000/api/buildings?from=2012&to=2013&bbox=81.123,27.987,85.456,29.123';
		console.log(apiURL);

		$.get(apiURL, function(result) {
				console.log(result);
			chartData[1] = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[result[0].count, result[1].count, result[2].count, result[4].count, result[5].count],
				[0, 0.3, 0.4, 1, 2.2],
				[0.1, 0.4, 0.5, 1.2, 2],
				[0.1, 0.5, 0.6, 1.2, 2],
				[0.2, 0.6, 0.7, 1.2, 1.9],
				[0.3, 0.7, 0.8, 1.3, 1.8],
				[0.4, 0.8, 0.4, 4, 4.2],
				[0.4, 0.9, 1, 1.2, 2],
			]
		};
		_this.forceUpdate();

		});
		chartData[0] = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[0, 0.5, 1, 1.2, 4.2]
			]
		};
		chartData[1] = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[0, 3, 4.2, 5.8, 12],
				[0, 0.3, 0.4, 1, 2.2],
				[0.1, 0.4, 0.5, 1.2, 2],
				[0.1, 0.5, 0.6, 1.2, 2],
				[0.2, 0.6, 0.7, 1.2, 1.9],
				[0.3, 0.7, 0.8, 1.3, 1.8],
				[0.4, 0.8, 0.4, 4, 4.2],
				[0.4, 0.9, 1, 1.2, 2],
			]
		};
		chartData[2] = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[1000, 2100, 2800, 2900, 8600]
			]
		};
	}

	// Makes chart number 1; y_unit = unit of y axis, eg: M or K
	makeChart(data, y_unit, selector) {
		var options = {
			width: 500,
			height: 400,
			axisX: {
				showGrid: false
			},
			axisY: {
				offset: 60,
				labelInterpolationFnc: function(value) {
					if(value === 0)
						return value;
					return value + y_unit;
				}
			}
		};

		new Chartist.Line(selector, data, options);
	}

	hoverOnChart() {
		document.getElementById('nav_left').className = 'nav-left';
		document.getElementById('nav_right').className = 'nav-right';
	}

	hoverOutOnChart() {
		document.getElementById('nav_left').className = 'hide';
		document.getElementById('nav_right').className = 'hide';
	}

	// char navigation left click 
	navLeftClick() {
		var charts = document.getElementsByClassName('chart');
		for(var i = 0; i < 3; i++) {
			if(charts[i].className.indexOf('hide') === -1) {
				charts[i].className += ' hide';
				if(i - 1 === -1)
					i = 3;
				charts[(i - 1) % 3].className = 'chart';
				break;
			}
		}
	}

	// char navigation right click 
	navRightClick() {
		var charts = document.getElementsByClassName('chart');
		for(var i = 0; i < 3; i++) {
			if(charts[i].className.indexOf('hide') === -1) {
				charts[i].className += ' hide';
				charts[(i + 1) % 3].className = 'chart';
				break;
			}
		}
	}

	render() {
		return (
			<div className="all-charts" onMouseOver={this.hoverOnChart} onMouseOut={this.hoverOutOnChart}>
				<div className="charts">
					<div id="chart_1" className="chart">
						<span className="chart-title">Map Contributions</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">Map Contributions</span>
					</div>
					<div id="chart_2" className="chart hide">
						<span className="chart-title">Features Edited</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">No. of Features Edited</span>
					</div>
					<div id="chart_3" className="chart hide">
						<span className="chart-title">Users</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">No. of Users</span>
					</div>
				</div>
				<div id="nav_left" className="" onClick={this.navLeftClick}></div>
				<div id="nav_right" className="" onClick={this.navRightClick}></div>
			</div>
		);
	}
}
