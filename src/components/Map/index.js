var React = require('react');
var LeafletMap = require('react-leaflet').Map; 
var TileLayer = require('react-leaflet').TileLayer;

require('./style.scss');

var nepalCenter = [28.478348, 84.439285];
var nepalZoom = 7;

export default class Map extends React.Component {
	render() {
		return(
			<div className="map">
			<LeafletMap id="map" center={nepalCenter} 
			zoom={nepalZoom} minZoom={nepalZoom} 
			doubleClickZoom={false} zoomControl={true}>
				<TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
			</LeafletMap>
			</div>
		)
	}
}
