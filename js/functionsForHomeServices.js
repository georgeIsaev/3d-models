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
function createListItems(collapseId, modelName, modelLink, modelDescription) {
	$accordion.find('#' + collapseId).find('ul.list-group').append(listGroupItemStr);
	$accordion.find('#' + collapseId).find('li:last-child').append(listGroupItemLinkStr);
	$accordion.find('#' + collapseId).find('li:last-child').find('a.item-link')
		.html(modelName).attr({
			'href': modelLink,
			'description': modelDescription
		});
};

var $catalog = $('#catalog');
var column = ('<div class="column col-xs-12 col-sm-4 col-md-4 col-lg-4"> </div>');
var product = ('<div class="prod-column"> <img src="" alt="" class="prod-img"> <h2 class="title"> </h2> </div>');

// Функция создания ряда под продукты
function createCatalog(productId, nameGroup, imgSrc) {
	$catalog.append(column);
	
	var $lastColumn = $catalog.find('.column:last-child');

	$lastColumn.append(product).attr('id', productId);

	var $title = $('#' + productId).find('.title:last-child');
	var $img = $('#' + productId).find('.prod-img:last-child');
	
	$title.html(nameGroup);
	$img.attr('src', imgSrc);

};
