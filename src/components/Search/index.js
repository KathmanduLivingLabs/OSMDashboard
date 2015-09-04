var React = require('react');

require('./style.scss');


export default class Search extends React.Component {
	render() {
		return(
			<div className="search">
				<input id="search_input" className="search-input" type="text" placeholder="Search for Places"/>
				<div className="search-btn">Search</div>
			</div>
		);
	}
}
