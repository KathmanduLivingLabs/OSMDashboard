function fetchData(query_type, fromYear, toYear, bbox) {
	console.log("hello bello");
	setLoader();
	fromYear = (typeof fromYear === 'undefined') ? '2010' : fromYear;
	toYear = (typeof toYear === 'undefined') ? '2010' : toYear;
	bbox = (typeof bbox === 'undefined') ? '81.123, 27.987,85.456,29.123' : bbox;

	var apiURL = 'http://45.55.246.231:3000/api/' + query_type + '?from=';
	apiURL += fromYear + '&to=';
	apiURL += toYear + '&bbox=' + bbox;
	var data = null;
	$.ajax({
		url: apiUrl,
		success: function(result) {
			hideLoader();
			data = result;
		},
		async: false
	});
	return result;
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
