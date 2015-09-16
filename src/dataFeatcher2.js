var loadingDataDeffered = $.Deferred();
	
function fetchData(query_type, fromYear, toYear, bbox) {
	fromYear = (typeof fromYear === 'undefined') ? '2010' : fromYear;
	toYear = (typeof toYear === 'undefined') ? '2010' : toYear;
	bbox = (typeof bbox === 'undefined') ? '' : bbox;
	
	if(bbox === '' && fromYear === '2010' && toYear === '2015') {
		switch(query_type) {
			case 'roads':
				//return nepalStats.all[0];
				console.log("froom data featcher");
				console.log(nepalStats.all[0]);
				loadingDataDeffered.resolve(nepalStats.all[0], query_type, 0);
				break;
			case 'waterways':
				//return nepalStats.all[1];
				loadingDataDeffered.resolve(nepalStats.all[1], query_type, 1);
				break;
			case 'edu_institute':
				//return nepalStats.all[2];
				loadingDataDeffered.resolve(nepalStats.all[2], query_type, 2);
				break;
			case 'buildings':
				//return nepalStats.all[3];
				loadingDataDeffered.resolve(nepalStats.all[3], query_type, 3);
				break;
			case 'medical':
				//return nepalStats.all[4];
				loadingDataDeffered.resolve(nepalStats.all[4], query_type, 4);
				break;
			case 'financial_institute':
				//return nepalStats.all[5];
				loadingDataDeffered.resolve(nepalStats.all[5], query_type, 5);
				break;
			case 'gov_offices':
				//return nepalStats.all[6];
				loadingDataDeffered.resolve(nepalStats.all[6], query_type, 6);
				break;
			case 'historic_sites':
				//return nepalStats.all[7];
				loadingDataDeffered.resolve(nepalStats.all[7], query_type, 7);
				break;
			case 'natural_heritage':
				//return nepalStats.all[8];
				loadingDataDeffered.resolve(nepalStats.all[8], query_type, 8);
				break;
			case 'tourist_interest':
				//return nepalStats.all[9];
				loadingDataDeffered.resolve(nepalStats.all[9], query_type, 9);
				break;
			case 'settlement':
				//return nepalStats.all[10];
				loadingDataDeffered.resolve(nepalStats.all[10], query_type, 10);
				break;
			case 'e_i_y':
				//return nepalStats.all[11];
				loadingDataDeffered.resolve(nepalStats.all[11], query_type, 11);
				break;
			case 'users':
				//return nepalStats.all[12];
				loadingDataDeffered.resolve(nepalStats.all[12], query_type, 12);
				break;
		}
	} else {
	
		setLoader();
		
		var apiURL = 'http://45.55.246.231:8000/api/' + query_type + '?from=';
		apiURL += fromYear + '&to=';
		apiURL += toYear + '&bbox=' + bbox;
		console.log(apiURL);
		var data = null;
		$.ajax({
			url: apiURL,
			success: function(result) {
				hideLoader();
				data = result;
				console.log(data);
				switch(query_type) {
			case 'roads':
				//return nepalStats.all[0];
				loadingDataDeffered[0].resolve(data, query_type);
				break;
			case 'waterways':
				//return nepalStats.all[1];
				loadingDataDeffered[1].resolve(data, query_type);
				break;
			case 'edu_institute':
				//return nepalStats.all[2];
				loadingDataDeffered[2].resolve(data, query_type);
				break;
			case 'buildings':
				//return nepalStats.all[3];
				loadingDataDeffered[3].resolve(data, query_type);
				break;
			case 'medical':
				//return nepalStats.all[4];
				loadingDataDeffered[4].resolve(data, query_type);
				break;
			case 'financial_institute':
				//return nepalStats.all[5];
				loadingDataDeffered[5].resolve(data, query_type);
				break;
			case 'gov_offices':
				//return nepalStats.all[6];
				loadingDataDeffered[6].resolve(data, query_type);
				break;
			case 'historic_sites':
				//return nepalStats.all[7];
				loadingDataDeffered[7].resolve(data, query_type);
				break;
			case 'natural_heritage':
				//return nepalStats.all[8];
				loadingDataDeffered[8].resolve(data, query_type);
				break;
			case 'tourist_interest':
				//return nepalStats.all[9];
				loadingDataDeffered[9].resolve(data, query_type);
				break;
			case 'settlement':
				//return nepalStats.all[10];
				loadingDataDeffered[10].resolve(data, query_type);
				break;
			case 'e_i_y':
				//return nepalStats.all[11];
				loadingDataDeffered[11].resolve(data, query_type);
				break;
			case 'users':
				//return nepalStats.all[12];
				loadingDataDeffered[12].resolve(data, query_type);
				break;
		}
				//loadingDataDeffered.resolve(data);
				hideLoader();
			},
			async: true
		});
	}
}

function setLoader() {
	$('#overlay').show();
	$('.sk-cube').show();
}

function hideLoader() {
	console.log($);
	$('#overlay').hide();
	$('.sk-cube').hide();
}
