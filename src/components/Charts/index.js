var React = require('react');
require('./style.scss');

export default class Charts extends React.Component {
	componentDidMount() {
		this.makeChartOne();
	}

	// Makes chart number 1
	makeChartOne() {
		var data = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[0, 0.5, 1, 1.2, 4.2]
			]
		};

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
					return value + 'M';
				}
			}
		};

		new Chartist.Line('.chart-1', data, options);
	}

	render() {
		return (
			<div className="all-charts">
				<div className="charts">
					<div className="chart-1">
						<span className="chart-title">Map Contributions</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">Map Contributions</span>
					</div>
					<div className="chart-2">

					</div>
					<div className="chart-3"></div>
				</div>
				<div className="nav-left"></div>
				<div className="nav-right"></div>
			</div>
		);
	}
}
