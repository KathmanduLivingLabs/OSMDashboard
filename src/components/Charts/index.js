var React = require('react');
require('./style.scss');

var chartData = [];
export default class Charts extends React.Component {
	constructor() {
		super();
		this.state = {
			roads: [],
			eduInstitute: [],
			buildings: [],
			medical: [],
			financialInstitue: [],
			govOffices: [],
			historicSites: [],
			naturalHeritage: [],
			touristInterest: [],
			settlement: []
		};
	}
	componentDidMount() {
		this.setChartData();
		this.makeChart(chartData[0], 'M', '#chart_1');
		this.makeChart(chartData[1], 'K', '#chart_2');
		this.makeChart(chartData[2], '', '#chart_3');
	}

	setRoads(roads) {
		this.setState({
			roads: roads
		});
	}

	setEduInstitute(eduInstitute) {
		this.setState({
			eduInstitute: eduInstitute
		});
	}

	setBuildings(buildings) {
		this.setState({
			buildings: buildings
		});
	}

	setMedical(medical) {
		this.setState({
			medical: medical
		});
	}

	setFinancialInstitue(financialInstitue) {
		this.setState({
			financialInstitue: financialInstitue
		});
	}

	setGovOffices(govOffices) {
		this.setState({
			govOffices: govOffices
		});
	}

	setHistoricSites(historicSites) {
		this.setState({
			historicSites: historicSites
		});
	}

	setNaturalHeritage(naturalHeritage) {
		this.setState({
			naturalHeritage: naturalHeritage
		});
	}

	setTouristInterest(touristInterest) {
		this.setState({
			touristInterest: touristInterest
		});
	}

	setSettlement(settlement) {
		this.setState({
			settlement: settlement
		});
	}

	// sets chart data and options for all charts 
	setChartData() {
		var buildings = fetchData('buildings');
		chartData[0] = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[0, 0.5, 1, 1.2, 4.2]
			]
		};
		chartData[1] = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[buildings[0].count, buildings[1].count, buildings[2].count, buildings[3].count, buildings[4].count],
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
