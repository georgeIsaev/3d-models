$(function() {
	var bracketsData = [
		{
			text: 'Кронштейн',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/zuPskqnmIhk3b8V'
		},

		{
			text: 'Кронштейн 3',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/lIASCLKpFkbfSRZ'
		},

		{
			text: 'Кронштейн 4',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/A5jM9CbEbkqanyv'
		},

		{
			text: 'Кронштейн 135°',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/rX9o4Esy9FjYfJ4'
		},

		{
			text: 'Кронштейн Г-образный большой',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/7u3zVsm9UeRE0qi'
		},

		{
			text: 'Кронштейн Г-образный средний',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/5Dfmoqqur3vcqms'
		},

		{
			text: 'Кронштейн Г-образный малый',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/qH8RkWViGdVNkvH'
		},

		{
			text: 'Кронштейн треугольный большой левый',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/45GLbESn9NhL4NJ'
		},

		{
			text: 'Кронштейн треугольный большой правый',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/TwjzfBCFNUolZxR'
		},

		{
			text: 'Кронштейн треугольный малый левый',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/rN4LjHCiNGLcfaB'
		},

		{
			text: 'Кронштейн треугольный малый правый',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/FuaIqT8eHh2Hd0k'
		},

		{
			text: 'Кронштейн треугольный средний левый',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/fbT0sjjwqP6RKsA'
		},

		{
			text: 'Кронштейн треугольный средний правый',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/svpDjipATdFg9SV'
		},

		{
			text: 'Кронштейн петля',
			class: 'bracket',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/2ylmJ5dJHdBeMU6'
		}

	];

	var railsData = [
		{
			text: 'Рейка',
			class: 'rail',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/HAAgOBPzNumJozH'
		},

		{
			text: 'Рейка большая',
			class: 'rail',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/POILtMf3Kw1xeJn'
		},

		{
			text: 'Рейка средняя',
			class: 'rail',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/2BRbYxao3rR68hw'
		},

		{
			text: 'Рейка малая',
			class: 'rail',
			modelSrc: 'https://www.3dvieweronline.com/members/Id64329af3e5dc362feda36f2bb623a515/F3EaqMYJgvXUaPh'
		}

	];

	var platsData = [
		{
			text: 'Пластина резная 400',
			class: 'plat',
			modelSrc: ''
		},

		{
			text: 'Пластина резная 460',
			class: 'plat',
			modelSrc: ''
		},

		{
			text: 'Пластина уголок большая',
			class: 'plat',
			modelSrc: ''
		},

		{
			text: 'Пластина уголок средняя',
			class: 'plat',
			modelSrc: ''
		},

		{
			text: 'Пластина уголок малая',
			class: 'plat',
			modelSrc: ''
		},

		{
			text: 'Т-образная пластина',
			class: 'plat',
			modelSrc: ''
		},

	];

	var cornersData = [
		{
			text: 'Сборка большая',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Сборка средняя',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Сборка малая',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок большой',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок средний',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок малый',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок оконный большой',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок оконный малый',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок оконный средний',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок с овальными отверстиями',
			class: 'corner',
			modelSrc: ''
		},

		{
			text: 'Уголок трехмерный',
			class: 'corner',
			modelSrc: ''
		},

	];

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
		var paragraph = makeElement('li', liName.class);
		var link = makeElement('a', 'br_link',liName.text);
		link.href = '#';
		paragraph.appendChild(link);
		return paragraph;
	};



	// Выбор елемента Кронштейны
	var listElement = document.getElementById('brackets');
	// Цикл создания элементов списка Кронштейн
	for (var i = 0; i < bracketsData.length; i++) {

		var app = createPar(bracketsData[i]);
		listElement.appendChild(app);

	}

	// Выбор елемента рейки
	var listElement = document.getElementById('rails');
	// Цикл создания элементов списка Рейки
	for (var i = 0; i < railsData.length; i++) {

		var app = createPar(railsData[i]);
		listElement.appendChild(app);

	}

	// Выбор елемента плиты
	var listElement = document.getElementById('plats');
	// Цикл создания элементов списка плиты
	for (var i = 0; i < platsData.length; i++) {

		var app = createPar(platsData[i]);
		listElement.appendChild(app);

	}

	// Выбор елемента уголок
	var listElement = document.getElementById('corners');
	// Цикл создания элементов списка Уголок
	for (var i = 0; i < cornersData.length; i++) {

		var app = createPar(cornersData[i]);
		listElement.appendChild(app);

	}


	
	var modelFrame = document.getElementById('3dviewerplayer');

	//Выбор всех элементов списка Кронштейны, Рейка, Пластины, Уголок
	var bracketsList = document.querySelectorAll('.bracket');
var railsList = document.querySelectorAll('.rail');
	var platsList = document.querySelectorAll('.plat');
	var cornersList = document.querySelectorAll('.corner');

	//Перехват клика на элемент из списка Кронштейны и изменение адресса элемента <iframe>
	var addBracketsListClickHandler = function (bracketList, bracketData) {
	  bracketList.addEventListener('click', function (evt) {
	  	evt.preventDefault();
	    modelFrame.src = bracketData.modelSrc;
	  });
	};

	for (var i = 0; i < bracketsList.length; i++) {
  	addBracketsListClickHandler(bracketsList[i], bracketsData[i]);
	}

//Перехват клика на элемент из списка Рейка и изменение адресса элемента <iframe>
var addRailsListClickHandler = function (railList, railData) {
  railList.addEventListener('click', function (evt) {
  	evt.preventDefault();
    modelFrame.src = railData.modelSrc;
  });
};

	for (var i = 0; i < railsList.length; i++) {
  	addBracketsListClickHandler(railsList[i], railsData[i]);
	}

	//Перехват клика на элемент из списка Пластины и изменение адресса элемента <iframe>
	var addPlatsListClickHandler = function (platList, platData) {
	  platList.addEventListener('click', function (evt) {
	  	evt.preventDefault();
	    modelFrame.src = platData.modelSrc;
	  });
	};

	for (var i = 0; i < platsList.length; i++) {
  	addBracketsListClickHandler(platsList[i], platsData[i]);
	}

	//Перехват клика на элемент из списка Уголок и изменение адресса элемента <iframe>
	var addCornersListClickHandler = function (cornerList, cornerData) {
	  cornerList.addEventListener('click', function (evt) {
	  	evt.preventDefault();
	    modelFrame.src = cornerData.modelSrc;
	  });
	};

	for (var i = 0; i < cornersList.length; i++) {
  	addBracketsListClickHandler(cornersList[i], cornersData[i]);
	}

});
