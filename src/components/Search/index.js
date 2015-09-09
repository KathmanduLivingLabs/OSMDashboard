var React = require('react');

require('./style.scss');


export default class Search extends React.Component {
	setSearchText(e) {
		this.props.setSearchText(e.target.value);
	}
	render() {
		return(
			<div className="search">
				<input onChange={this.setSearchText.bind(this)} id="search_input" className="search-input" type="text" placeholder="Search for Places"/>
				<div className="search-btn">Search</div>
			</div>
		);
	}
}
