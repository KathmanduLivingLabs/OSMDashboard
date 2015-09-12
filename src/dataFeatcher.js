function fetchData(query_type, fromYear, toYear, bbox) {
	console.log("hello bello");
	
	
	fromYear = (typeof fromYear === 'undefined') ? '2010' : fromYear;
	toYear = (typeof toYear === 'undefined') ? '2010' : toYear;
	bbox = (typeof bbox === 'undefined') ? '81.123,27.987,85.456,29.123' : bbox;
	
	if(bbox === '81.123,27.987,85.456,29.123' && fromYear === '2010' && toYear === '2015') {
		switch(query_type) {
			case 'roads':
				return nepalStats.all[0];
			case 'waterways':
				return nepalStats.all[1];
			case 'edu_institute':
				return nepalStats.all[2];
			case 'buildings':
				return nepalStats.all[3];
			case 'medical':
				return nepalStats.all[4];
			case 'financial_institute':
				return nepalStats.all[5];
			case 'gov_offices':
				return nepalStats.all[6];
			case 'historic_sites':
				return nepalStats.all[7];
			case 'natural_heritage':
				return nepalStats.all[8];
			case 'tourist_interest':
				return nepalStats.all[9];
			case 'settlement':
				return nepalStats.all[10];
			case 'e_i_y':
				return nepalStats.all[11];
			case 'users':
				return nepalStats.all[12];
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
			},
			async: false
		});
		return data;
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
