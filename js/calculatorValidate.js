$(function() {

	$("#phone").mask("+7(999) 999-99-99");

	$('#myForm').validate({
		rules: {
			contactPerson: {
				required: true,
				minlength: 1
			},
			phone: {
				required: true
			},
			email: {
				required: true,
				minlength: 10
			},
			productName: {
				required: true,
				minlength: 2
			},
			quantity: {
				required: true
			},
			material: {
				required: true,
				minlength: 2
			},
			deliveryTime: {
				required: true
			}
		},

		messages: {
			contactPerson: {
				required: "Поле обязательно к заполнению"
			},
			phone: "Поле 'Сайт' обязательно к заполнению",
			email: {
				required: "Поле 'Email' обязательно к заполнению",
				email: "Необходим формат адреса email" 
			},
			productName: {
				required: "Поле 'Наименование изделия' обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Наименование изделия'"
			},
			quantity: "Поле 'Потребность в месяц' обязательно к заполнению",
			material: {
				required: "Поле 'Материал' обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Материал'"
			},
			deliveryTime: "Поле 'Желаемый срок поставки первой партии' обязательно к заполнению"
		}
	});
});
