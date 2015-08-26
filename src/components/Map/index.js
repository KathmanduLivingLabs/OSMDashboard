import L from 'Leaflet';
var React = require('react');
var LeafletMap = require('react-leaflet').Map; 
var TileLayer = require('react-leaflet').TileLayer;

require('./style.scss');

export default class Map extends React.Component {
	constructor() {
		super();
		this.lmap = null;
	}
	componentDidMount() {
		this.lmap = L.map('map').setView([28.478348, 84.439285], 7);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.lmap);
	}
	render() {
		return(
			<div id="map" className="map">
			</div>
		)
	}
}
