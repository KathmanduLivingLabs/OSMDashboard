import React from 'react';
import Chart from '../Chart';

const QUERYTYPES = ['roads', 'waterways', 'edu_institute', 'buildings', 'medical',
						'financial_institute', 'gov_offices', 'historic_sites', 'natural_heritage',
						'tourist_interest', 'settlement', 'e_i_y', 'users'];

export default class ChartMaker extends React.Component {
	constructor() {
		super();
		this.allData = [];
		this.queryArgs = [];
		this.state = {
			test: 'abc',
			OSMData: []
		}
	}

	componentDidMount() {
		this.loadData();
	}

	setOSMData(OSMData) {
		this.setState({
			OSMData: OSMData
		});
	}

	loadData() {
		var _this = this;
		this.queryArgs = [this.props.fromYear, this.props.toYear, this.props.bbox];

		for(var i = 0; i < 13; i++)
			fetchData(QUERYTYPES[i], this.queryArgs[0], this.queryArgs[1], this.queryArgs[2]);

		$.when(
			loadingDataDeffered[0],
			loadingDataDeffered[1],
			loadingDataDeffered[2],
			loadingDataDeffered[3],
			loadingDataDeffered[4],
			loadingDataDeffered[5],
			loadingDataDeffered[6],
			loadingDataDeffered[7],
			loadingDataDeffered[8],
			loadingDataDeffered[9],
			loadingDataDeffered[10],
			loadingDataDeffered[11],
			loadingDataDeffered[12]
		).done(function(...OSMData) {
			_this.setOSMData(OSMData);
		});
	}

	render() {
		return(
			<div>
			{
			this.state.OSMData.map(function(item, index){
				console.log(<Chart />)
				return <Chart />
			})
			}
			</div>
		)
	}
}
