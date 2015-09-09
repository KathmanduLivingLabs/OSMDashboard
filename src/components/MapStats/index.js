var React = require('react');
require('./style.scss');

export default class MapStats extends React.Component {
	render() {
		return(
			<div className="map-stat">
				<div className="map-stat-title">Map Stats</div>
				<div className="map-stat-table">
					<div className="map-stat-row-color">
						<span className='col-1'>Roads</span>
						<span className='col-2'>3000 Km</span>
						<span className='col-3'>Newest Road Map is a 3 Km section. Mapped By Manoj Thapa on 2015:02:01 </span>
					</div>
				
					<div className="map-stat-row">
						<span className='col-1'>Waterway</span>
						<span className='col-2'>2000 Km</span>
						<span className='col-3'>Newest waterway Map is a 5Km section. Mapped By Manoj Thapa on 2015:01:01</span>

</div>
					<div className="map-stat-row-color">
						<span className='col-1'>Educational Institute</span>
						<span className='col-2'>500</span>
						<span className='col-3'>Newest educational institute mapped is school. Mapped By Manoj Thapa on 2015:01:01</span>
					</div>
					<div className="map-stat-row">
						<span className='col-1'>Building</span>
						<span className='col-2'>500</span>
						<span className='col-3'>Newest building is mapped By Manoj Thapa on 2015:01:01</span>
					</div>
					<div className="map-stat-row-color">
						<span className='col-1'>Medical</span>
						<span className='col-2'>500</span>
						<span className='col-3'>Newest medical mapped is hospital.Mapped By Manoj Thapa on 2015:01:01</span>
					</div>
					<div className="map-stat-row">
						<span className='col-1'>Financial Institute</span>
						<span className='col-2'>500</span>
						<span className='col-3'>Newest financial institute mapped is bank .Mapped By Manoj Thapa on 2015:01:01</span>
					</div>
					<div className="map-stat-row-color">
						<span className='col-1'>Government Offices</span>
						<span className='col-2'>500</span>
						<span className='col-3'>Newest government office is mapped By Manoj Thapa on 2015:01:01</span>
					</div>
					<div className="map-stat-row">
						<span className='col-1'>Historic Sites</span>
						<span className='col-2'>500</span>
						<span className='col-3'>Newest historic sites is mapped By Manoj Thapa on 2015:01:01</span>
					</div>
					<div className="map-stat-row-color">
						<span className='col-1'>Natural Heritage</span>
						<span className='col-2'>500</span>
						<span className='col-3'>Newest natural heritage is mapped By Manoj Thapa on 2015:01:01</span>
					</div>
					<div className="map-stat-row">
						<span className='col-1'>Tourist Interest</span>
						<span className='col-2'>0</span>
						<span className='col-3'>-</span>
					</div>
					<div className="map-stat-row-color">
						<span className='col-1'>Settlement</span>
						<span className='col-2'>0</span>
						<span className='col-3'>-</span>
					</div>
		</div>
</div>
		);
	}
}
