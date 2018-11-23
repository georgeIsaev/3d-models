
	var $accordion = $('#accordion');
	var panelStr = ('<div class="panel panel-default"> </div>');
	var panelHeadingStr = ('<div class="panel-heading" role="tab"> </div>');
	var panelTitleStr = ('<h4 class="panel-title"> </h4>');
	var collapsedStr = ('<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false"> </a>');
	var panelCollapseStr = ('<div class="panel-collapse collapse" role="tabpanel""> </div>');
	var panelBodyStr = ('<div class="panel-body"> </div>');
	var listGroupStr = ('<ul class="list-group"> </ul>');
	var listGroupItemStr = ('<li class="list-group-item"> </li>');
	var listGroupItemLinkStr = ('<a class="item-link"> </a>');

	// Функция создания панели выпадающего списка под bootstrap 3
	function createPanel(headingId, collapseId, headerName) {
		$accordion.append(panelStr);
		var $lastPanel = $accordion.find('.panel:last-child');

		$lastPanel.append(panelHeadingStr);
		$lastPanel.find('.panel-heading').append(panelTitleStr);
		$lastPanel.find('.panel-heading').find('.panel-title').append(collapsedStr);
		$lastPanel.find('.panel-heading').attr('id', headingId);
		$lastPanel.find('.panel-heading').find('a.collapsed')
			.html(headerName)
			.attr({
				"href": '#' + collapseId,
				"aria-controls": collapseId
			});

		$lastPanel.append(panelCollapseStr);
		var $panelCollapse = $lastPanel.find('.panel-collapse');
		$panelCollapse.append(panelBodyStr);
		$panelCollapse.find('.panel-body').append(listGroupStr);
		var $listGroup = $panelCollapse.find('.panel-body').find('.list-group');

		$panelCollapse.attr({
			"id": collapseId,
			"aria-labelledby": headingId
		});
	};

	// Функция создания элемента выпадающего списка под bootstrap 3
	function createListItems(collapseId, modelName, modelLink) {
		$accordion.find('#' + collapseId).find('ul.list-group').append(listGroupItemStr);
		$accordion.find('#' + collapseId).find('li:last-child').append(listGroupItemLinkStr);
		$accordion.find('#' + collapseId).find('li:last-child').find('a.item-link')
			.html(modelName).attr('href', modelLink);
	};

	// Функция смены источника у модели при нажатии на кнопку
	function changeHrefOfIframe (element) {
		$(element).click(function(event) {
			event.preventDefault();
			var href = $(element).attr("href");;
			iframe.attr('src', href);
		});
	};



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
				createListItems(collapseId, arrajObject.name, arrajObject.link);
			}
		}

		var allItemLink = $('.item-link');
		var iframe = $('#3dviewerplayer');

		for (var i = 0; i < allItemLink.length; i++) {

			$(allItemLink[i]).click(function(event) {
				event.preventDefault();
				var href = $(this).attr("href");
				iframe.attr('src', href);
			});
		}
	});	
});

