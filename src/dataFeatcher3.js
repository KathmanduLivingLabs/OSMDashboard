const QUERYS = ['roads', 'waterways', 'edu_institute', 'buildings', 'medical',
						'financial_institute', 'gov_offices', 'historic_sites', 'natural_heritage',
						'tourist_interest', 'settlement', 'e_i_y', 'users'];

var loadingDataDeffered = [];
for(var i = 0; i < 13; i++)
	loadingDataDeffered[i]= $.Deferred();

function fetchData(query_type, fromYear, toYear, bbox) {
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
						loadingDataDeffered[nepalStats_month[QUERYS.indexOf(query_type)]].resolve(item, query_type);
			});
				break;
			case 1:
				allData = nepalStats_month[QUERYS.indexOf(query_type)].map(function(item, index) {
				if((item.year.indexOf(toYear) !== -1) || (item.year.indexOf(fromYear) !== -1)) {
						if(index % 2 === 0)
							loadingDataDeffered[nepalStats_month[QUERYS.indexOf(query_type)]].resolve(item, query_type);
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
				console.log('default');
				console.log('query_type = ' + query_type);
				console.log('indexOf = ' + QUERYS.indexOf(query_type));
				allData = nepalStats_month[QUERYS.indexOf(query_type)].map(function(item, index) {
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
			console.log('allData');
			console.log(allData);
			loadingDataDeffered[nepalStats_month[QUERYS.indexOf(query_type)]].resolve(allData, query_type);
		}
	}
}
