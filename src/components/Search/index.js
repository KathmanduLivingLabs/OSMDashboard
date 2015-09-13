var React = require('react');
var districts = require('../../data/district.geojson');
var vdcs = require('../../data/vdc.geojson');
var L = require('leaflet');

require('./style.scss');


export default class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			searchResultList: []
		};
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

		var updatedList_2 = vdcs.features;
		updatedList_2 = updatedList_2.filter(function(item) {
			return item.properties.NAME.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0;
		});

		updatedList.sort(function(a, b) {
			return a.properties.NAME.localeCompare(b.properties.NAME);
		});
		var finalList = updatedList.concat(updatedList_2);
		this.setSearchResultList(finalList);
		if(e.target.value === '')
			this.setSearchResultList([]);
	}

	selectItem(feature, e) {
		var layer = L.geoJson(feature);
		console.log(layer.getBounds());
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
					<div className="search-btn">Search</div>
				</div>
				<div className="search-result">
					{
						this.state.searchResultList.map(function(item, index) {
							return(<span 
											key={index}
											onClick={_this.selectItem.bind(this, item)}>
												{item.properties.NAME}
											</span>);
						})
					}	
				</div>
			</div>
		);
	}
}
