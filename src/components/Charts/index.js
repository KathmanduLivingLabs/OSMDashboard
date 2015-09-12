var React = require('react');
require('./style.scss');

var chartData = [];
export default class Charts extends React.Component {
	constructor() {
		super();
		this.state = {
			roads: [],
			waterway: [],
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

	setWaterway(waterway) {
		this.setState({
			waterway: waterway
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

	removeNullFromChartDataAndSync(data) {
		var resultData = [];
		var newResultData = [0, 0, 0, 0, 0, 0];
		var nullArr = []; 
		data.forEach(function(item) {
				if(!item.max)
					nullArr.push(item);
				else {
					if(item.max.indexOf(2010) !== -1)
						newResultData[0] = item;	
					else if(item.max.indexOf(2011) !== -1) 
						newResultData[1] = item;
					else if(item.max.indexOf(2012) !== -1) 
						newResultData[2] = item;
					else if(item.max.indexOf(2013) !== -1) 
						newResultData[3] = item;
					else if(item.max.indexOf(2014) !== -1) 
						newResultData[4] = item;
					else if(item.max.indexOf(2015) !== -1) 
						newResultData[5] = item;
				}
		});
		for(var i = 0; i < newResultData.length; i++) {
			if(newResultData[i] === 0) {
				newResultData[i] = nullArr.pop();
			}
		}
		newResultData.forEach(function(item) {
			if(typeof item.sum !== 'undefined') {
				if(!item.sum) {
					item.sum = 0;
				}
			}
			resultData.push(item);
		});
		console.log(resultData);
		return resultData;
	}

	// sets chart data and options for all charts 
	setChartData() {
		//var roads = fetchData('roads');
		//var waterways = fetchData('waterways');
		//var buildings = fetchData('buildings', 2010, 2014);

		//buildings = this.removeNullFromChartData(buildings);
		//roads = this.removeNullFromChartData(roads);
		//waterways = this.removeNullFromChartData(waterways);

		//console.log(buildings);
		//console.log(roads);
		//console.log(waterways);
		
		var roads = fetchData('roads', 2010, 2013);
		var waterways = fetchData('waterways', 2010, 2013);
		var eduInstitute = fetchData('edu_institute', 2010, 2013);
		var buildings = fetchData('buildings', 2010, 2013);
		var medical = fetchData('medical', 2010, 2013);
		var financialInstitue = fetchData('financial_institue', 2010, 2013);
		var govOffices = fetchData('gov_offices', 2010, 2013);
		var historicSites = fetchData('historic_sites', 2010, 2013);
		var naturalHeritage = fetchData('natural_heritage', 2010, 2013);
		var touristInterest = fetchData('tourist_interest', 2010, 2013);
		var settlement = fetchData('settlement', 2010, 2013);


		roads = this.removeNullFromChartDataAndSync(roads);
		waterways = this.removeNullFromChartDataAndSync(waterways);
		eduInstitute = this.removeNullFromChartDataAndSync(eduInstitute);
		buildings = this.removeNullFromChartDataAndSync(buildings);
		medical = this.removeNullFromChartDataAndSync(medical);
		financialInstitue = this.removeNullFromChartDataAndSync(financialInstitue);
		govOffices = this.removeNullFromChartDataAndSync(govOffices);
		historicSites = this.removeNullFromChartDataAndSync(historicSites);
		naturalHeritage = this.removeNullFromChartDataAndSync(naturalHeritage);
		touristInterest = this.removeNullFromChartDataAndSync(touristInterest);
		settlement = this.removeNullFromChartDataAndSync(settlement);
	 
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
				[!roads[0].sum ? 0 : roads[0].sum, !roads[1].sum ? 0 : roads[1].sum, !roads[2].sum ? 0 : roads[2].sum, !roads[3].sum ? 0 : roads[3].sum, !roads[4].sum ? 0 : roads[4].sum],
				[!waterways[0].sum ? 0 : waterways[0].sum, waterways[1].sum ? 0 : waterways[1].sum, waterways[2].sum ? 0 : waterways[2].sum, waterways[3].sum ? 0 : waterways[3].sum, waterways[4].sum ? 0 : waterways[4].sum],
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
