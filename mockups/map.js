var map = L.map ('map').setView([28.1,85.12], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var editLayer = new L.FeatureGroup();
map.addLayer(editLayer);

var drawControl = new L.Control.Draw({
	edit: {
		FeatureGroup: editLayer
	}
});

map.addControl(drawControl);
