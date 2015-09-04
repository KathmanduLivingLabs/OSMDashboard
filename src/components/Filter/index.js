var React = require('react');
var Pikaday = require('pikaday');

require('./style.scss');
require('./pikaday.scss');

export default class Filter extends React.Component {
	constructor() {
		super();
		this.state = {
			fromPikerDate: null,
			toPikerDate: null
		};
	}
	componentDidMount() {
		this.state.fromPikerDate = new Pikaday({
			field: document.getElementById('from_date_filter'),
			onSelect: (date) => {
				console.log(date);
				console.log(this.state.fromPikerDate._d.getYear());
			}
		});
		this.state.toPikerDate = new Pikaday({
			field: document.getElementById('to_date_filter'),
			onSelect: (date) => {
				console.log(date);
				console.log(this.state.toPikerDate._d.getYear());
			}
		});
	}
	render() {
		return(
			<div className="filter">
				<div className="time-filter">
					<input id="from_date_filter" className="input_filter" placeholder="Enter From Date" type="text" />
					<select id="from_time_filter" className="select-time">
						<option key="00:00">00:00</option>
						<option key="01:00">01:00</option>
						<option key="02:00">02:00</option>
						<option key="03:00">03:00</option>
						<option key="04:00">04:00</option>
						<option key="05:00">05:00</option>
						<option key="06:00">06:00</option>
						<option key="07:00">07:00</option>
						<option key="08:00">08:00</option>
						<option key="09:00">09:00</option>
						<option key="10:00">10:00</option>
						<option key="11:00">11:00</option>
						<option key="12:00">12:00</option>
						<option key="13:00">13:00</option>
						<option key="14:00">14:00</option>
						<option key="15:00">15:00</option>
						<option key="16:00">16:00</option>
						<option key="17:00">17:00</option>
						<option key="18:00">18:00</option>
						<option key="19:00">19:00</option>
						<option key="20:00">20:00</option>
						<option key="21:00">21:00</option>
						<option key="22:00">22:00</option>
						<option key="23:00">23:00</option>
					</select>
				</div>
				<div className="time-filter">
					<input id="to_date_filter" className="input_filter" placeholder="Enter To Date" type="text" />
					<select id="to_time_filter" className="select-time">
						<option key="00:00">00:00</option>
						<option key="01:00">01:00</option>
						<option key="02:00">02:00</option>
						<option key="03:00">03:00</option>
						<option key="04:00">04:00</option>
						<option key="05:00">05:00</option>
						<option key="06:00">06:00</option>
						<option key="07:00">07:00</option>
						<option key="08:00">08:00</option>
						<option key="09:00">09:00</option>
						<option key="10:00">10:00</option>
						<option key="11:00">11:00</option>
						<option key="12:00">12:00</option>
						<option key="13:00">13:00</option>
						<option key="14:00">14:00</option>
						<option key="15:00">15:00</option>
						<option key="16:00">16:00</option>
						<option key="17:00">17:00</option>
						<option key="18:00">18:00</option>
						<option key="19:00">19:00</option>
						<option key="20:00">20:00</option>
						<option key="21:00">21:00</option>
						<option key="22:00">22:00</option>
						<option key="23:00">23:00</option>
					</select>
				</div>
				<div className="apply-filter">Apply Filter</div>
			</div>
		);
	}
}
