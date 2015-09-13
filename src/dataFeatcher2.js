var loadingDataDeffered = $.Deferred();
function fetchData(query_type, fromYear, toYear, bbox) {
	
	
	fromYear = (typeof fromYear === 'undefined') ? '2010' : fromYear;
	toYear = (typeof toYear === 'undefined') ? '2010' : toYear;
	bbox = (typeof bbox === 'undefined') ? '' : bbox;
	
	if(bbox === '' && fromYear === '2010' && toYear === '2015') {
		switch(query_type) {
			case 'roads':
				//return nepalStats.all[0];
				loadingDataDeffered.resolve(nepalStats[0]);
				break;
			case 'waterways':
				//return nepalStats.all[1];
				loadingDataDeffered.resolve(nepalStats[1]);
				break;
			case 'edu_institute':
				//return nepalStats.all[2];
				loadingDataDeffered.resolve(nepalStats[2]);
				break;
			case 'buildings':
				//return nepalStats.all[3];
				loadingDataDeffered.resolve(nepalStats[3]);
				break;
			case 'medical':
				//return nepalStats.all[4];
				loadingDataDeffered.resolve(nepalStats[4]);
				break;
			case 'financial_institute':
				//return nepalStats.all[5];
				loadingDataDeffered.resolve(nepalStats[5]);
				break;
			case 'gov_offices':
				//return nepalStats.all[6];
				loadingDataDeffered.resolve(nepalStats[6]);
				break;
			case 'historic_sites':
				//return nepalStats.all[7];
				loadingDataDeffered.resolve(nepalStats[7]);
				break;
			case 'natural_heritage':
				//return nepalStats.all[8];
				loadingDataDeffered.resolve(nepalStats[8]);
				break;
			case 'tourist_interest':
				//return nepalStats.all[9];
				loadingDataDeffered.resolve(nepalStats[9]);
				break;
			case 'settlement':
				//return nepalStats.all[10];
				loadingDataDeffered.resolve(nepalStats[10]);
				break;
			case 'e_i_y':
				//return nepalStats.all[11];
				loadingDataDeffered.resolve(nepalStats[11]);
				break;
			case 'users':
				//return nepalStats.all[12];
				loadingDataDeffered.resolve(nepalStats[12]);
				break;
		}
	} else {
	
		setLoader();
		
		var apiURL = 'http://45.55.246.231:3000/api/' + query_type + '?from=';
		apiURL += fromYear + '&to=';
		apiURL += toYear + '&bbox=' + bbox;
		console.log(apiURL);
		var data = null;
		$.ajax({
			url: apiURL,
			success: function(result) {
				hideLoader();
				data = result;
				loadingDataDeffered.resolve(data);
				hideLoader();
			},
			async: false
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
