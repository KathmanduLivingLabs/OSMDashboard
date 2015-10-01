import React from 'react';
import Chart from '../Chart';

require('./style.scss')

const QUERYTYPES = ['roads', 'waterways', 'edu_institute', 'buildings', 'medical',
						'financial_institute', 'gov_offices', 'historic_sites', 'natural_heritage',
						'tourist_interest', 'settlement', 'e_i_y', 'users'];

export default class ChartMaker extends React.Component {
	constructor() {
		super();
		this.allData = [];
		this.queryArgs = [];
		this.state = {
			OSMData: [],
			childCount: 0,
		}
	}

	componentDidMount() {
		this.loadData();
	}

	componentDidUpdate() {
		if(this.state.childCount === 12) {
				setTimeout(function() {
					var allCharts = document.getElementsByClassName('all-charts');
					for(var i = 1; i < allCharts.length; i++) 
						allCharts[i].className = 'all-charts hide';
				}, 1000);

		}
	}

	setOSMData(OSMData) {
		this.setState({
			OSMData: OSMData
		});
	}

	incrementChildCount() {
		if(this.state.childCount < 12)
			++this.state.childCount;
		else {
			this.setState({
				childCount: this.state.childCount + 1
			});
		}
	}

	loadData() {
		var _this = this;
		this.queryArgs = [this.props.fromYear, this.props.toYear, this.props.bbox];

		for(var i = 0; i < 13; i++)
			fetchData(QUERYTYPES[i], this.queryArgs[0], this.queryArgs[1], this.queryArgs[2]);

		$.when(
			loadingDataDeffered[0],
			loadingDataDeffered[1],
			loadingDataDeffered[2],
			loadingDataDeffered[3],
			loadingDataDeffered[4],
			loadingDataDeffered[5],
			loadingDataDeffered[6],
			loadingDataDeffered[7],
			loadingDataDeffered[8],
			loadingDataDeffered[9],
			loadingDataDeffered[10],
			loadingDataDeffered[11],
			loadingDataDeffered[12]
		).done(function(...OSMData) {
			_this.setOSMData(OSMData);
		});
	}

	// char navigation left click 
	navLeftClick() {
		var charts = document.getElementsByClassName('all-charts');
		for(var i = 0; i < 12; i++) {
			if(charts[i].className.indexOf('hide') === -1) {
				charts[i].className += ' hide';
				if(i - 1 === -1)
					i = 12;
				charts[(i - 1) % 12].className = 'all-charts';
				break;
			}
		}
	}

	// char navigation right click 
	navRightClick() {
		var charts = document.getElementsByClassName('all-charts');
		for(var i = 0; i < 12; i++) {
			if(charts[i].className.indexOf('hide') === -1) {
				charts[i].className += ' hide';
				charts[(i + 1) % 12].className = 'all-charts';
				break;
			}
		}
	}

	hoverOnChart() {
		document.getElementById('nav_left').className = 'nav-left';
		document.getElementById('nav_right').className = 'nav-right';
	}

	hoverOutOnChart() {
		document.getElementById('nav_left').className = 'nav-left hide';
		document.getElementById('nav_right').className = 'nav-left hide';
	}

	render() {
		var _this = this;
		return(
			<div className="chart-wrapper" 
				onMouseOver={this.hoverOnChart} 
				onMouseOut={this.hoverOutOnChart}>
				<div id="nav_left" className="nav-left hide" onClick={this.navLeftClick}></div>
				<div id="nav_right" className="nav-right hide" onClick={this.navRightClick}></div>
				{
					this.state.OSMData.map(function(item, index) {
						return <Chart key={index} feature={item} 
										index={index}
										incrementChildCount={_this.incrementChildCount.bind(_this)} />
					})
				}
			</div>
		)
	}
}
