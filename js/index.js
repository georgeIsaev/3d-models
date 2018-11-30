$(function() {
	
	var hash = window.location.pathname;
	hash = hash.substr(hash.lastIndexOf('/') + 1);

	if(hash == 'home.html') {
		$('#home').toggleClass('active');
	} else if (hash == 'technology.html') {
		$('#technology').toggleClass('active');
	} else if (hash == 'services.html') {
		$('#services').toggleClass('active');
	} else if (hash == 'contacts.html') {
		$('#contacts').toggleClass('active');
	}

});