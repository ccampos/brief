var http = require('http'),
	urls = ['shapeshed.com', 'www.bbc.co.uk', 'edition.cnn.com'];


for (var i = 0; i < urls.length; i += 1) {
	fetchPage(urls[i]);
};

function fetchPage(url) {
	var then = new Date();

	http.get({
		host: url
	}, function(res) {
		var now = new Date();
		console.log("Got response from:", url);
		console.log("Request took:", now - then, 'ms');
	});
};