var React = require('react');
var Header = require('../Header');
var Filter = require('../Filter');
var Search = require('../Search');
var Map = require('../Map');
var Charts = require('../Charts');
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
					<div className="horizontal-line"></div>
					<Map />
					<Charts />
				</div>
				<Footer />	
			</div>
		);

	}
}
