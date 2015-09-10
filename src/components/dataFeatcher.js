function fetchData(query_type, fromYear, toYear, bbox) {
	fromYear = (typeof fromYear === 'undefined') ? '2010' : fromYear;
	toYear = (typeof toYear === 'undefined') ? '2010' : toYear;
	bbox = (typeof bbox === 'undefined') ? '81.123, 27.987,85.456,29.123' : bbox;

	var apiURL = 'http://45.55.246.231:3000/api/' + query_type + '?from=';
	apiURL += fromYear + '&to=';
	apiURL += toYear + '&bbox=' + bbox;
	$.get(apiURL, function(result) {
		return result;
	});
}
