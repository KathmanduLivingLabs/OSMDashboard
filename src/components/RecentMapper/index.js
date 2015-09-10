var React = require('react');
require('./style.scss');

export default class RecentMapper extends React.Component {
	render(){
		return(
			<div className="recent-mapper">
				<div className="recent-mapper-title">Recently Active Mappers</div>
			<div className="recent-mapper-block">
				<div className="recent-mapper-row-color">
					<span className="rm-col-1">Megha Shrestha</span>
					<span className="rm-col-2">Mapped a restaurant</span>
			</div>
				<div className="recent-mapper-row">
					<span className="rm-col-1">Rita Ranjit</span>
					<span className="rm-col-2">Mapped a road</span>
			</div>
				<div className="recent-mapper-row-color">
					<span className="rm-col-1">Ram Shrestha</span>
					<span className="rm-col-2">Mapped a building</span>
			</div>
				<div className="recent-mapper-row">
					<span className="rm-col-1">Nirab Pudasaini</span>
					<span className="rm-col-2">Mapped a shop</span>
			</div>
				<div className="recent-mapper-row-color">
					<span className="rm-col-1">Sanoj Thapa</span>
					<span className="rm-col-2">Mapped a hospital</span>
			</div>
		</div>
		</div>	
)
}
}
