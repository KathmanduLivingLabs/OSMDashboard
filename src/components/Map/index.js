import L from 'leaflet';
var React = require('react');
var nepal_border = require('../../data/nepal_border.json');
var district = require('../../data/district.geojson');
require('./style.scss');

export default class Map extends React.Component {
	constructor() {
		super();
		this.lmap = null;
		this.state = {
			searcText: '',
		};
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

		/*
		var vdcLayer = L.geoJson(vdc_json, {
			fillOpacity: 0,
			color: 'grey',
			weight: 0,
			opacity: 0
		}).addTo(this.lmap);
	 */

		var districtLayer = L.geoJson(district, {
			fillOpacity: 0,
			color: 'grey',
			weight: 0,
			opacity: 0
		}).addTo(this.lmap);
	}

	componentDidUpdate(prevProps) {
		if(typeof(this.props.selectedLayer.feature) === 'undefined') {
			if(prevProps.selectedLayer !== this.props.selectedLayer) {
				this.props.selectedLayer.addTo(this.lmap);
				this.lmap.fitBounds(this.props.selectedLayer.getBounds());
			}
		}
	}

	render() {
		//console.log(this.props.selectedLayer._layers["_leaflet_id"].feature.properties.NAME);
		//var leafletID = this.props.selectedLayer._leaflet_id;
		//if(typeof this.props.selectedLayer.properties === 'undefined')
		//console.log(this.props.selectedLayer._layers[leafletID - 1].feature.properties.NAME, leafletID);
		return(
			<div id="map" className="map"></div>
		)
	}
}
