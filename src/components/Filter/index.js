var React = require('react');

require('./style.scss');

export default class Filter extends React.Component {
	render() {
		return(
			<div className="filter">
				<div className="time-filter">
					<input id="time_filter" className="input_filter" placeholder="Enter Time" type="text" />
				</div>
				<div className="apply-filter">Apply Filter</div>
			</div>
		);
	}
}
