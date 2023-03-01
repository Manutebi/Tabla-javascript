$(document).ready(function() {
	var apiKey = 'keykY5YjFxN23izT6';
	var baseId = 'appTsErgl1kPnkWgl';
	var table = 'Accounts';

	var url = 'https://api.airtable.com/v0/' + baseId + '/' + table + '?fields=Name, Industry, Size, Company website, Company LinkedIn, Contacts, Opportunities, HQ address, Map cache  ';

	$.ajax({
		url: url,
		headers: { 'Authorization': 'Bearer ' + apiKey },
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			// Aquí se procesa los datos recibidos
		},
		error: function(xhr, textStatus, errorThrown) {
			console.log(xhr.responseText);
		}
	});
});
