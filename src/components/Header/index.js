var React = require('react');

require('./style.scss');

export default class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<div className="title">
					<span className="title-osm">OSM </span>
					<span className="title-dash">Dash</span>
					<span className="title-b">b</span>
					<span className="title-oard">oard</span>
				</div>
				<div className="about">About</div>
				<div className="tour">Tour</div>
			</div>
		);
	}
}
