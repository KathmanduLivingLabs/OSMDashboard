var React = require('react');
var Header = require('../Header');
var Search = require('../Search');
var Map = require('../Map');
var ChartMaker = require('../ChartMaker');
var Footer = require('../Footer');

var districts = require('../../data/district.geojson');
require('./style.scss');

const QUERYTYPES = ['roads', 'waterways', 'edu_institute', 'buildings', 'medical',
						'financial_institute', 'gov_offices', 'historic_sites', 'natural_heritage',
						'tourist_interest', 'settlement', 'e_i_y', 'users'];

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			bbox: '',
			fromYear: '2010',
			toYear: '2015',
			selectedLayer: districts.features[0],
			OSMData: [],
		};
	}


	componentDidMount() {
		this.loadData();
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

	setOSMData(OSMData) {
		this.setState({
			OSMData: OSMData
		});
	}

	setSelectedLayerAndBbox(selectedLayer, bbox) {
		this.setState({
			selectedLayer: selectedLayer,
			bbox: bbox
		});
	}

	loadData() {
		var _this = this;
		this.queryArgs = [this.state.fromYear, this.state.toYear, this.state.bbox];

		initalizeDeferred();
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
			var newOSMData = JSON.parse(JSON.stringify(OSMData));
			var oldOSMData = OSMData;
			OSMData.map(function(item, index) {
				for(var i = 0; i < 35; i++) {
					if(typeof item[0][i] === 'undefined') {
						OSMData[index][0].splice(i, 1);
					}
				}
			});
			OSMData.map(function(item, index) {
				for(var i = 0; i < 18; i++) {
					if(typeof item[0][i] === 'undefined') {
						OSMData[index][0].splice(i, 1);
					}
				}
			});
			OSMData.map(function(item, index) {
				for(var i = 0; i < 18; i++) {
					if(typeof item[0][i] === 'undefined') {
						OSMData[index][0].splice(i, 1);
					}
				}
			});
			OSMData.map(function(item, index) {
				for(var i = 0; i < 18; i++) {
					if(typeof item[0][i] === 'undefined') {
						OSMData[index][0].splice(i, 1);
					}
				}
			OSMData.map(function(item, index) {
				for(var i = 0; i < 18; i++) {
					if(typeof item[0][i] === 'undefined') {
						OSMData[index][0].splice(i, 1);
					}
				}
			});
			});
			console.log(OSMData);
			_this.setOSMData(OSMData);
			//chartMakerThis.forceUpdate();
		});
	}


	render() {
		return( 
				<div className="container">
					<div id="overlay"></div>
				<Header />
				<div className="content">
					<Search 
						setSearchText={this.setSearchText.bind(this)}
						setBbox={this.setBbox.bind(this)} 
						loadData={this.loadData.bind(this)}
						setFromYear={this.setFromYear.bind(this)}
						setToYear={this.setToYear.bind(this)}
						setSelectedLayerAndBbox={this.setSelectedLayerAndBbox.bind(this)} />
					<div className="all-border">
						<Map />
						<ChartMaker ref="chartMaker"
							OSMData={this.state.OSMData}
							fromYear={this.state.fromYear}
							toYear={this.state.toYear}
							loadData={this.loadData.bind(this)}
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
