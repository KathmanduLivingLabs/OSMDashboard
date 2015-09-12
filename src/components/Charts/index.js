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
		this.makeChart(chartData[1], '', '#chart_2');
		this.makeChart(chartData[2], 'K', '#chart_3');
		this.makeChart(chartData[3], '', '#chart_4');
		this.makeChart(chartData[4], '', '#chart_5');
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
		var roads = fetchData('roads', '2010', '2015');
		var waterways = fetchData('waterways', '2010', '2015');
		var eduInstitute = fetchData('edu_institute', '2010', '2015');
		var buildings = fetchData('buildings', '2010', '2015');
		var medical = fetchData('medical', '2010', '2015');
		var financialInstitue = fetchData('financial_institute', '2010', '2015');
		var govOffices = fetchData('gov_offices', '2010', '2015');
		var historicSites = fetchData('historic_sites', '2010', '2015');
		var naturalHeritage = fetchData('natural_heritage', '2010', '2015');
		var touristInterest = fetchData('tourist_interest', '2010', '2015');
		var settlement = fetchData('settlement', '2010', '2015');

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
			labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
			series: [
				[0, 0.5, 1, 1.2, 4.2]
			]
		};
		chartData[1] = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[1000, 2100, 2800, 2900, 8600]
			]
		};
		chartData[2] = {
			labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
			series: [
				[eduInstitute[0].school_total, eduInstitute[1].school_total, eduInstitute[2].school_total, 
					eduInstitute[3].school_total, eduInstitute[4].school_total, eduInstitute[5].school_total],

				[medical[0].hospital_total, medical[1].hospital_total, medical[2].hospital_total, 
					medical[3].hospital_total, medical[4].hospital_total, medical[5].hospital_total],

				[financialInstitue[0].finance_total, financialInstitue[1].finance_total, 
					financialInstitue[2].finance_total, financialInstitue[3].finance_total, 
					financialInstitue[4].finance_total, financialInstitue[5].finance_total],

				[govOffices[0].offc_total, govOffices[1].offc_total, govOffices[2].offc_total, 
					govOffices[3].offc_total, govOffices[4].offc_total, govOffices[5].offc_total],

				[historicSites[0].historic_total, historicSites[1].historic_total, 
					historicSites[2].historic_total, historicSites[3].historic_total, 
					historicSites[4].historic_total, historicSites[5].historic_total],

				[naturalHeritage[0].natural_total, naturalHeritage[1].natural_total, 
					naturalHeritage[2].natural_total, naturalHeritage[3].natural_total, 
					naturalHeritage[4].natural_total, naturalHeritage[5].natural_total],

				[touristInterest[0].count, touristInterest[1].count, touristInterest[2].count, 
					touristInterest[3].count, touristInterest[4].count, touristInterest[5].count]
			]
		};
		chartData[3] = {
			labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
			series: [
				[buildings[0].count, buildings[1].count, buildings[2].count, 
					buildings[3].count, buildings[4].count, buildings[5].count]
			]
		};
		chartData[4] = {
			labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
			series: [
				[Math.round(roads[0].sum / 1000), Math.round(roads[1].sum / 1000), Math.round(roads[2].sum / 1000), 
					Math.round(roads[3].sum / 1000), Math.round(roads[4].sum / 1000), Math.round(roads[5].sum / 1000)],
				[Math.round(waterways[0].sum / 1000), Math.round(waterways[1].sum / 1000), Math.round(waterways[2].sum / 1000), 
					Math.round(waterways[3].sum / 1000), Math.round(waterways[4].sum / 1000), Math.round(waterways[5].sum / 1000)]
			]
		};
	}

	// Makes chart number 1; y_unit = unit of y axis, eg: M or K
	makeChart(data, y_unit, selector) {
		var options = {
			width: 500,
			height: 350,
			axisX: {
				showGrid: false
			},
			lineSmooth: false,
			axisY: {
				offset: 60,
				labelInterpolationFnc: function(value) {
					if(value === 0)
						return value;
					return value + y_unit;
				}
			},
			/*
			plugins:[
				Chartist.plugins.ctAxisTitle({
					axisX: {
						axisTitle: 'hello there angle',
						axisClass: 'ct-axis-title',
						offset: {
							x: 0,
							y: 35
						},
						textAnchor: 'middle'
					},
					axisY: {
						axisTitle: 'the angle from my',
						axisClass: 'ct-axis-title',
						offset: {
							x: 0,
							y: 0
						},
						textAnchor: 'middle',
						flipTitle: true
					}
				})
			] */
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
		for(var i = 0; i < 5; i++) {
			if(charts[i].className.indexOf('hide') === -1) {
				charts[i].className += ' hide';
				if(i - 1 === -1)
					i = 5;
				charts[(i - 1) % 5].className = 'chart';
				break;
			}
		}
	}

	// char navigation right click 
	navRightClick() {
		var charts = document.getElementsByClassName('chart');
		for(var i = 0; i < 5; i++) {
			if(charts[i].className.indexOf('hide') === -1) {
				charts[i].className += ' hide';
				charts[(i + 1) % 5].className = 'chart';
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
					</div>
					<div id="chart_2" className="chart hide">
						<span className="chart-title">Users</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">No. of Users</span>
					</div>
					<div id="chart_3" className="chart hide">
						<span className="chart-title">Features Edited</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">No. of Features Edited</span>
					</div>
					<div id="chart_4" className="chart hide">
						<span className="chart-title">Buildings Edited</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">No. of Buildings Edited</span>
					</div>
					<div id="chart_5" className="chart hide">
						<span className="chart-title">Waterways and Roads</span>
						<span className="x-axis-label">Year</span>
						<span className="y-axis-label">Length of Edited Features</span>
					</div>
				</div>
				<div id="nav_left" className="" onClick={this.navLeftClick}></div>
				<div id="nav_right" className="" onClick={this.navRightClick}></div>
			</div>
		);
	}
}
