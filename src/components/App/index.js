var React = require('react');
var Header = require('../Header');
var Filter = require('../Filter');
var Search = require('../Search');
var Map = require('../Map');
var ErrorMsg = require('../ErrorMsg');
var Footer = require('../Filter');

require('./style.scss');

export default class App extends React.Component {
	render() {
		return( 
			<div className="container">
				<Header />
				<div className="content">
					<Filter />
					<Search />
					<Map />
				</div>
				<Footer />	
			</div>
		);

	}
}
