var servicesOneData = [
	{
		serviceName: 'Услуга', 
	},
	{
		serviceName: 'Услуга', 
	},
	{
		serviceName: 'Услуга', 
	},
	{
		serviceName: 'Услуга', 
	},
	{
		serviceName: 'Услуга', 
	},
	{
		serviceName: 'Услуга', 
	},
];
var servicesTwoData = [];
var servicesThreeData = [];
var servicesFourData = [];
var servicesFiveData = [];


$(function() {
	
	// Функция создания елементов
	var makeElement = function (tagName, className, text) {
	  var element = document.createElement(tagName);
	  element.classList.add(className);
	  if (text) {
	    element.textContent = text;
	  }
	  return element;
	};

	// Функция создания елементов списка
	var createPar = function(liName){
		var paragraph = makeElement('li', 'list-group-item');
		var link = makeElement('a', 'br_link',liName.serviceName);
		link.href = '#';
		paragraph.appendChild(link);
		return paragraph;
	};


	// Выбор елемента Услуги 1
	var listElement = document.getElementById('servicesOne');
	// Цикл создания элементов списка Кронштейн
	for (var i = 0; i < servicesOneData.length; i++) {

		var app = createPar(servicesOneData[i]);
		app.classList.add('serviceOne');
		listElement.appendChild(app);

	}
});
	
	
$(function() {

	var modelFrame = document.getElementById('3dviewerplayer');

	//Выбор всех элементов списка Услуги
	var bracketsList = document.querySelectorAll('.bracket');
	var railsList = document.querySelectorAll('.rail');
	var platsList = document.querySelectorAll('.plat');
	var cornersList = document.querySelectorAll('.corner');

	//Перехват клика на элемент из списка Услуги1 и изменение адресса элемента <iframe>
	var ClickHandler = function (listName, listData) {
	  listName.addEventListener('click', function (evt) {
	  	evt.preventDefault();
	    modelFrame.src = listData.modelSrc;
	  });
	};

	for (var i = 0; i < bracketsList.length; i++) {
  	ClickHandler(bracketsList[i], bracketsData[i]);
	}
});