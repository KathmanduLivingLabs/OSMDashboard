var React = require('react');

export default class MapStats extends React.Component {
	render() {
		return(
			<div className="map-stat">
				<div className="map-stat-title">Map Stats</div>
				<div className="map-stat-table">
					<div className="map-stat-row">
						<span>Roads</span>
						<span>3000 Km</span>
						<span>Newest Road Map is a 3 Km section in Dolakha. Mapped By Manoj Thapa 2 days ago</span>
					</div>
				</div>
			</div>
		);
	}
}
