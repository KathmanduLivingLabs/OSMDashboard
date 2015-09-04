import L from 'Leaflet';
var React = require('react');

require('leaflet-draw');
require('./style.scss');

export default class Map extends React.Component {
	constructor() {
		super();
		this.lmap = null;
	}
	componentDidMount() {
		this.lmap = L.map('map').setView([28.478348, 84.439285], 6);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.lmap);

		var editableLayer = new L.FeatureGroup();
		this.lmap.addLayer(editableLayer);

		var drawControl = new L.Control.Draw({
			draw: {
				polyline: false,
				marker: false,
				rectangle: false,
				circle: false
			},
			edit: {
				featureGroup: editableLayer
			}
		});
		this.lmap.addControl(drawControl);

		this.lmap.on('draw:created', function(e) {
			editableLayer.addLayer(e.layer);
			console.log(e.layer.getBounds());
		});
	}
	render() {
		return(
			<div id="map" className="map">
			</div>
		)
	}
}
