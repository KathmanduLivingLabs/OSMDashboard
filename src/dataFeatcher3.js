const QUERYS = ['roads', 'waterways', 'edu_institute', 'buildings', 'medical',
						'financial_institute', 'gov_offices', 'historic_sites', 'natural_heritage',
						'tourist_interest', 'settlement', 'e_i_y', 'users'];

var loadingDataDeffered = [];
for(var i = 0; i < 13; i++)
	loadingDataDeffered[i]= $.Deferred();

function featchData(query_type, fromYear, toYear, bbox) {
	fromYear = (typeof fromYear === 'undefined') ? '2010' : fromYear;
	toYear = (typeof toYear === 'undefined') ? '2010' : toYear;
	bbox = (typeof bbox === 'undefined') ? '' : bbox;
	var allData = [];

	if(bbox === '') {
		var diff = toYear - fromYear;

		switch(diff) {
			case 0:
				allData = nepalStats_month[QUERYS.indexOf(query_type)].map(function(item) {
					if(item.year.indexOf(toYear) !== -1)
						return item;
			});
				break;
			case 1:
				allData = nepalStats_month[QUERIES.indexOf(query_type)].map(function(item, index) {
				if((item.year.indexOf(toYear) !== -1) || (item.year.indexOf(fromYear) !== -1)) {
						if(index % 2 === 0)
							return item;
				}
			});
				break;
			default:
				var years = (() => {
					var tempYears = [];
					for(var i = 0; i <= diff; i++) 
						tempYears.push(fromYear + i);
					return tempYears;
				})();
				allData = nepalStats_month[QUERIES.indexOf(query_type)].map(function(item, index) {
					var mybool = (() => {
						var result = false;
						for(var i = 0; i < years.length; i++)
							result || index.year.indexOf(years[i]);
						return result;
					})();
					if(result) {
						if(index === 0)
							return item;
					}	
			});
		}
	}
}
