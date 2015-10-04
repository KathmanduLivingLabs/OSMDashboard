const QUERYS = ['roads', 'waterways', 'edu_institute', 'buildings', 'medical',
						'financial_institute', 'gov_offices', 'historic_sites', 'natural_heritage',
						'tourist_interest', 'settlement', 'e_i_y', 'users'];

var loadingDataDeffered = [];

function initalizeDeferred() {
	for(var i = 0; i < 13; i++)
		loadingDataDeffered[i]= $.Deferred();
}

function fetchData(query_type, fromYear, toYear, bbox) {
	fromYear = (typeof fromYear === 'undefined') ? '2010' : fromYear;
	toYear = (typeof toYear === 'undefined') ? '2010' : toYear;
	bbox = (typeof bbox === 'undefined') ? '' : bbox;
	var allData = [];

	if(bbox === '') {
		var diff = toYear - fromYear;

		switch(diff) {
			case 0:
				allData = nepalStats_month.all[QUERYS.indexOf(query_type)].map(function(item) {
					if(item.year.indexOf(toYear) !== -1)
						return item;
			});
			loadingDataDeffered[QUERYS.indexOf(query_type)].resolve(allData, query_type);
				break;
			case 1:
				allData = nepalStats_month.all[QUERYS.indexOf(query_type)].map(function(item, index) {
				if((item.year.indexOf(toYear) !== -1) || (item.year.indexOf(fromYear) !== -1)) {
						if(index % 2 === 0)
							return item;
				}
			});
			loadingDataDeffered[QUERYS.indexOf(query_type)].resolve(allData, query_type);
				break;
			default:
				var years = (() => {
					var tempYears = [];
					for(var i = 0; i <= diff; i++) 
						tempYears.push(Number(fromYear) + i);
					return tempYears;
				})();
				var prevValue = 0;
				allData = nepalStats.all[QUERYS.indexOf(query_type)].map(function(item, index) {
					var mybool = (() => {
						var result = false;
						for(var i = 0; i < years.length; i++)
							result  = item.year.indexOf(years[i].toString()) !== -1 || result;
						return result;
					})();
					if(mybool) {
						if(prevValue !== 0) {
							if(item.year.indexOf(prevValue.year.split('-')[0]) === -1) {
								prevValue = JSON.parse(JSON.stringify(item));
								return item;
							}
						} else {
							prevValue = JSON.parse(JSON.stringify(item));
							return item;
						}
					}
			});
			loadingDataDeffered[QUERYS.indexOf(query_type)].resolve(allData, query_type);
		}
	}
}
