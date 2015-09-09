import L from 'leaflet';
var React = require('react');
var nepal_border = require('../../data/nepal_border.json');
var vdc_json = require('../../data/vdc.geojson');
var district = require('../../data/district.geojson');
require('leaflet-draw');
require('./style.scss');

export default class Map extends React.Component {
	constructor() {
		super();
		this.lmap = null;
		this.state = {
			searcText: ''
		}
	}
	componentDidMount() {
		this.lmap = L.map('map').setView([28.478348, 84.439285], 6);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.lmap);
		var nepalBorderLayer = L.geoJson(nepal_border, {
			fillColor: 'red',
			fillOpacity: 0.1,
			color: 'grey',
			weight: 1,
			opacity: 1
		}).addTo(this.lmap);

		var vdcLayer = L.geoJson(vdc_json, {
			fillOpacity: 0,
			color: 'grey',
			weight: 0,
			opacity: 0
		}).addTo(this.lmap);

		var districtLayer = L.geoJson(district, {
			fillOpacity: 0,
			color: 'grey',
			weight: 0,
			opacity: 0
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
