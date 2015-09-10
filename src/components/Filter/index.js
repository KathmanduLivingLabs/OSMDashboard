var React = require('react');

require('./style.scss');
require('./pikaday.scss');

export default class Filter extends React.Component {
	constructor() {
		super();
		this.state = {
			fromYear: '',
			toYear: ''
		};
	}
	componentDidMount() {
	}

	applyFilter(e) {

	}

	setFromYear(fromYear) {
		this.setState({
			fromYear: fromYear
		});
	}

	setToYear(toYear) {
		this.setState({
			toYear: toYear
		});
	}

	render() {
		return(
			<div className="filter">
				<div className="time-filter">
					<select className="input_filter" onChange={this.setFromYear}>
						<option>2010</option>
						<option>2011</option>
						<option>2012</option>
						<option>2013</option>
						<option>2014</option>
						<option>2015</option>
					</select>
				</div>
				<div className="time-filter">
					<select className="input_filter" onChange={this.setToYear}>
						<option>2010</option>
						<option>2011</option>
						<option>2012</option>
						<option>2013</option>
						<option>2014</option>
						<option>2015</option>
					</select>
				</div>
				<div className="apply-filter" onClick={this.applyFilter}>Apply Filter</div>
			</div>
		);
	}
}
