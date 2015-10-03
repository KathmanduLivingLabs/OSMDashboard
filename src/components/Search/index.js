var React = require('react');
var districts = require('../../data/district.geojson');
//var vdcs = require('../../data/vdc.geojson');
var L = require('leaflet');

require('./style.scss');

var mySelectedFeature = null;
var myBbox = null;
export default class Search extends React.Component {
	constructor() {
		super();
		this.selectedFeature = null;
		this.bbox = null;
		this.state = {
			searchText: '',
			searchResultList: []
		};
	}

	componentDidMount() {
		$("#search_input").keyup(function (e) {
			if (e.keyCode == 13) {
				if(document.getElementById('search_input').value.toLowerCase() === 'nepal') {
					myBbox = '';
					mySelectedFeature = {};
				}
			}
		});
	}

	setSearchText(e) {
		//this.props.setSearchText(e.target.value);
		//this.setState({searchText: searchText});
	}

	setSearchResultList(searchResultList) {
		this.setState({
			searchResultList: searchResultList
		});
	}

	filterList(e) {
		var updatedList = districts.features;
		updatedList =	updatedList.filter(function(item) {
			return item.properties.NAME.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0;
		});

		/*
		var updatedList_2 = vdcs.features;
		updatedList_2 = updatedList_2.filter(function(item) {
			return item.properties.NAME.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0;
		});
	 */

		updatedList.sort(function(a, b) {
			return a.properties.NAME.localeCompare(b.properties.NAME);
		});
		//var finalList = updatedList.concat(updatedList_2);
		var finalList = updatedList;
		this.setSearchResultList(finalList);
		if(e.target.value === '')
			this.setSearchResultList([]);
	}

	selectItem(feature, e) {
		mySelectedFeature = L.geoJson(feature);
		myBbox = '' + mySelectedFeature.getBounds()._northEast.lng + ',' 
							 + mySelectedFeature.getBounds()._northEast.lat + ','
							 + mySelectedFeature.getBounds()._southWest.lng + ',' 
							 + mySelectedFeature.getBounds()._southWest.lat;
		document.getElementById('search_input').value = feature.properties.NAME;
		document.getElementById('search_input').focus();
		document.getElementById('search_input').select();
		//this.props.setSelectedLayerAndBbox(layer, bbox);

	}

	submitAll() {
		var from = document.getElementsByClassName('input_filter')[0];
		from = from.options[from.selectedIndex].value;
		var to = document.getElementsByClassName('input_filter')[1];
		to = to.options[to.selectedIndex].value;
		if(!this.state.selectedFeature) {
			
		} else {
			if(!this.state.bbox)
				this.state.bbox = '';
			this.props.setSelectedLayerBboxFromAndTo(mySelectedFeature, myBbox, from, to);
		}
		console.log('chartMaketThsi');
		console.log(this.props.chartMakerThis);
		//this.props.myrefs.loadData.call(this.props.chartMakerThis);
		this.props.myrefs.loadData();
		//this.props.loadData('abc');

	}

	render() {
		var _this = this;
		return(
			<div className="search-container">
				<div className="search">
					<input 
						onChange={this.filterList.bind(this)} 
						id="search_input" 
						className="search-input" 
						type="text" 
						placeholder="Search for Places"/>
					</div>

				<div className="time-filter">
					<select className="input_filter">
						<option value="2010">2010</option>
						<option value="2011">2011</option>
						<option value="2012">2012</option>
						<option value="2013">2013</option>
						<option vlaue="2014">2014</option>
						<option value="2015">2015</option>
					</select>
				</div>
				<div className="time-filter">
					<select className="input_filter">
						<option value="2015">2015</option>
						<option value="2014">2014</option>
						<option value="2013">2013</option>
						<option value="2012">2012</option>
						<option value="2011">2011</option>
						<option value="2010">2010</option>
					</select>
				</div>
					<div className="search-btn" onClick={this.submitAll.bind(this)}>Search</div>
				<div className="search-result">
					{
						this.state.searchResultList.map(function(item, index) {
							return(<span 
											key={index}
											onClick={_this.selectItem.bind(_this, item)}>
												{item.properties.NAME}
											</span>);
						})
					}	
				</div>
			</div>
		);
	}
}
