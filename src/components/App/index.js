var React = require('react');
var Header = require('../Header');
var Filter = require('../Filter');
var Search = require('../Search');
var Map = require('../Map');
var Charts = require('../Charts');
var MapStats = require('../MapStats');
var ErrorMsg = require('../ErrorMsg');
var Footer = require('../Footer');

require('./style.scss');

export default class App extends React.Component {
	render() {
		return( 
			<div className="container">
				<Header />
				<div className="content">
					<Search />
					<Filter />
					<div className="all-border">
						<Map />
						<Charts />
					</div>
					<div className="stats">
						<MapStats />
					</div>
				</div>
				<Footer />	
			</div>
		);

	}
}
