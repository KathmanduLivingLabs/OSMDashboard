import React from 'react';
import Chart from '../Chart';

require('./style.scss')

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
export default class ChartMaker extends React.Component {
	constructor() {
		super();
		this.state = {
			childCount: 0
		};
	}
	componentDidMount() {
		//var allCharts = document.getElementsByClassName('all-charts');
		//for(var i = 1; i < allCharts.length; i++) 
			//allCharts[i].className = 'all-charts hide';
	}

	componentWillUpdate() {
		var allCharts = document.getElementsByClassName('all-charts');
		for(var i = 1; i < allCharts.length; i++) {
			allCharts[i].className = 'all-charts';
		}
	}
	componentDidUpdate() {
		if(this.state.childCount >= 12) {
				var allCharts = document.getElementsByClassName('all-charts');
				allCharts[0].className = 'all-charts';
				setTimeout(function() {
					for(var i = 0; i < allCharts.length; i++)  {
						allCharts[i].className = 'all-charts hide';
					}
					allCharts[0].className = 'all-charts';
				}, 1000);
		}
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
					this.props.OSMData.map(function(item, index) {
						return(
							<div className='all-charts'>
							<span className="chart-title">{CHART_TITLE[index].main_title}</span>
							<span className="x-axis-label">Years</span>
							<span className="y-axis-label">{CHART_TITLE[index].y_axis}</span>
							<Chart key={index} feature={item} index={index} 
										childCount={_this.state.childCount}
										toYear={_this.props.toYear}
										fromYear={_this.props.fromYear}
										incrementChildCount={_this.incrementChildCount.bind(_this)} />
							</div>
						);
					})
				}
			</div>
		)
	}
}
