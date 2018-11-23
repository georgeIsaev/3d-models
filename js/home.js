$(function() {

	// Загрузка данных из файла в формате JSON
	$.getJSON('data/data.json', function(data) {
		var modelsData = [];
		var panelHeaderNameData = [];
		var panelItemsData = [];

		// Цикл перебора данных полученных из файла
		$(data).each( function(index, value) {
			for( var id in data){
				panelHeaderNameData.push(id);// Записываем в переменную panelHeaderNameData все имена заголовков
				modelsData.push(data[id]); // Записываем в переменную modelsData массив из всех элементов (массив из массивов)
			}
		});

		// Перебираем массив из всех элементов и записываем i-ый элемент массива
		// в новую переменную, что бы затем перебрать его в другом цикле 
		for (var i = 0; i < modelsData.length; i++){
			// Записываем заголовки выпадающих списков, что бы затем передать в функцию
			var arrayElement = modelsData[i];
			var headingId = 'heading' + arrayElement[0].id_model_group;
			var collapseId = 'collapse' + arrayElement[0].id_model_group;
			
			// Подставляем полученные данные в функцию и вызываем ее.
			// Она создаст панель для выпадающего меню
			createPanel(headingId, collapseId, panelHeaderNameData[i]);

			// Перебираем массив из объектов, зараннее записанный в переменную, на прошлом цикле
			for (var j = 0; j < arrayElement.length; j++){
				var arrajObject = arrayElement[j];

				// Полученные данные подставляем в функцию и вызываем ее.
				// она создаст элемент из выпадающего списка
				createListItems(collapseId, arrajObject.name, arrajObject.link, arrajObject.text);
			}
		}

		var allItemLink = $('.item-link');
		var iframe = $('#viewerplayer');
		var description = $('#modelDescription');

		for (var i = 0; i < allItemLink.length; i++) {

			$(allItemLink[i]).click(function(event) {
				event.preventDefault();
				var href = $(this).attr("href");
				var text = $(this).attr("description");
				iframe.attr('src', href).css('display', 'block');
				description.text(text).css('font-size', '18px');
			});
		}
	});	
});

