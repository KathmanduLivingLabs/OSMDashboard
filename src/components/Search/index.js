var React = require('react');
var districts = require('../../data/district.geojson');
var vdcs = require('../../data/vdc.geojson');

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

	setSearchResultText(searchResultList) {
		this.setState({
			searchResultList: searchResultList
		});
	}

	filterList(e) {
		var updatedList = districts.features;
		updatedList =	updatedList.filter(function(item) {
			return item.properties.NAME.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0;
		});

		var updatedList_2 = vdcs.features
		updatedList_2 = updatedList_2.filter(function(item) {
			return item.properties.NAME.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0;
		});

		updatedList = updatedList.slice(0, 3);
		updatedList_2 = updatedList_2.slice(0, 3);
		console.log(updatedList_2);
		var finalList = updatedList.concat(updatedList_2);
		this.setSearchResultText(finalList);
	}
	
	render() {
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
							return <span key={index}>{item.properties.NAME}</span>
						})
					}	
				</div>
			</div>
		);
	}
}
