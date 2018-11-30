$(function() {

  $('#formOne').validate({
    rules: {
      email: {
        required: true,
        minlength: 10
      }
    },

    messages: {
      email: {
        required: "Поле 'email' обязательно к заполнению",
        email: "Необходим формат адреса email" 
      }
    }
  });
});