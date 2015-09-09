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

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: ''
		};
	}

	setSearchText(searchText) {
		this.setState({
			searchText: searchText
		});
	}
	componentDidUpdate() {
		console.log(this.state.searchText);
	}

	render() {
		return( 
			<div className="container">
				<Header />
				<div className="content">
					<Search setSearchText={this.setSearchText.bind(this)} />
					<Filter />
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
