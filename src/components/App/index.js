var React = require('react');
var Header = require('../Header');
var Filter = require('../Filter');
var Search = require('../Search');
var Map = require('../Map');
var ChartMaker = require('../ChartMaker');
var MapStats = require('../MapStats');
var RecentMapper = require('../RecentMapper');
var Footer = require('../Footer');

require('./style.scss');
require('./spinner.scss');

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			bbox: '',
			fromYear: '2010',
			toYear: '2015',
			selectedLayer: null,
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

	setSelectedLayerBboxFromAndTo(selectedLayer, bbox) {
		this.setState({
			selectedLayer: selectedLayer,
			bbox: bbox,
			fromYear: from,
			toYear: to
		});
	}

	render() {
					/*<Filter 
						setFromYear={this.setFromYear.bind(this)}
						setToYear={this.setToYear.bind(this)} />
					 */
		return( 
				<div className="container">
					<div id="overlay"></div>
				<Header />
				<div className="content">
					<Search 
						setSearchText={this.setSearchText.bind(this)}
						setBbox={this.setBbox.bind(this)} 
						setSelectedLayerBboxFromAndTo={this.setSelectedLayerBboxFromAndTo.bind(this)} />
					<div className="all-border">
						<Map />
						<ChartMaker 
							fromYear={this.state.fromYear}
							toYear={this.state.toYear}
							bbox={this.state.bbox} />
					</div>
					<div className="stats">
					</div>
					<div className="recentmapper">
					</div>	
				</div>
				<Footer />	
			</div>
		);

	}
}
