var React = require('react');
var Header = require('../Header');
var Filter = require('../Filter');
var Search = require('../Search');
var Map = require('../Map');
var Charts = require('../Charts');
var MapStats = require('../MapStats');
var RecentMapper = require('../RecentMapper');
var ErrorMsg = require('../ErrorMsg');
var Footer = require('../Footer');

require('./style.scss');
require('./spinner.scss');

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			bbox: [],
			fromYear: 2010,
			toYear: 2015
		};
	}

	setSearchText(searchText) {
		this.setState({
			searchText: searchText
		});
	}

	setBbox(bbox) {
		this.setState({
			bbox: bbox
		});
	}

	setFromYear(fromYear) {
		this.setState({
			fromYear: fromYear
		});
	}

	setToYear(toYear) {
		this.setState({
			toYear: toYear
		});
	}

	render() {
		return( 
				<div className="container">
					<div id="overlay"></div>
					<div className="sk-folding-cube">
						<div className="sk-cube1 sk-cube"></div>
						<div className="sk-cube2 sk-cube"></div>
						<div className="sk-cube4 sk-cube"></div>
						<div className="sk-cube3 sk-cube"></div>
					</div>
				<Header />
				<div className="content">
					<Search 
						setSearchText={this.setSearchText.bind(this)}
						setBbox={this.setBbox.bind(this)} />
					<Filter 
						setFromYear={this.setFromYear.bind(this)}
						setToYear={this.setToYear.bind(this)} />
					<div className="all-border">
						<Map />
						<Charts />
					</div>
					<div className="stats">
						<MapStats />
					</div>
					<div className="recentmapper">
						<RecentMapper />
					</div>	
				</div>
				<Footer />	
			</div>
		);

	}
}
