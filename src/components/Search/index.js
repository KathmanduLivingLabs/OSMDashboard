var React = require('react');
var districts = require('../../data/district.geojson');
//var vdcs = require('../../data/vdc.geojson');
var L = require('leaflet');

require('./style.scss');

export default class Search extends React.Component {
	constructor() {
		super();
		this.selectedFeature = null;
		this.bbox = null;
		this.state = {
			searchText: '',
			searchResultList: [],
			vdcData: []
		};
	}

	componentDidMount() {
		/*
		$("#search_input").keyup(function (e) {
			if (e.keyCode == 13) {
				if(document.getElementById('search_input').value.toLowerCase() === 'nepal') {
					this.bbox = '';
					this.selectedFeature = {};
				}
			}
		});
	 */
	}

	setSearchResultList(searchResultList) {
		this.setState({
			searchResultList: searchResultList
		});
	}

	filterList(e) {
		var vdcs = {};
		var updatedList = {};
		var _this = this;
		if(e.target.value.length === 3) {
			var vdc_url = 'http://45.55.246.231:8000/api/vdc?name='
			vdc_url += e.target.value;
			$.ajax ({
				url: vdc_url,
				success: function(result) {
					_this.setState({
						vdcData: result
					});
				}
			});
		}
		updatedList = districts.features;
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
		if(feature.properties.NAME === 'Nepal') {
			this.selectedFeature = feature;
			this.bbox = '';
		}
		//TEMPORARLY TURNING THIS OFF TO SHOW TO NAMA SIR, PLEASE TURN IT BACK ON
		
		else {
			this.selectedFeature = L.geoJson(feature);
			this.bbox = '' + this.selectedFeature.getBounds()._southWest.lng + ',' 
								 + this.selectedFeature.getBounds()._southWest.lat + ','
								 + this.selectedFeature.getBounds()._northEast.lng + ',' 
								 + this.selectedFeature.getBounds()._northEast.lat;
		}
		this.props.setSelectedLayerAndBbox(this.selectedFeature, this.bbox);
	 
	 
		document.getElementById('search_input').value = feature.properties.NAME;
		document.getElementById('search_input').focus();
		document.getElementById('search_input').select();

	}

	submitAll() {
		var from = document.getElementsByClassName('input_filter')[0];
		from = from.options[from.selectedIndex].value;
		var to = document.getElementsByClassName('input_filter')[1];
		to = to.options[to.selectedIndex].value;
		var place = document.getElementById('search_input');

		this.props.setFromYear(from);
		this.props.setToYear(to);
		
		setTimeout(() => {
			this.props.loadData();	
		}, 1000);
	}

	setFrom(e) {
		this.props.setFromYear(e.target.value);
	}

	setTo(e) {
		this.props.setToYear(e.target.value);
	}

	render() {
		var _this = this;
		Object.assign(this.state.searchResultList, this.state.vdcData);
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
