$(function() {

	// Загрузка данных из файла в формате JSON
	$.getJSON('data/groups.json', function(data) {
		var groupsData = [];

		for (var i = 0; i < data.length; i++) {
			groupsData.push(data[i]);
		}

		for (var i = 0; i < groupsData.length; i++) {
			createCatalog(groupsData[i].id, groupsData[i].name_group, groupsData[i].img);
		}
	});	
});
