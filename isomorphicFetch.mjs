// require('es6-promise').polyfill();
import 'isomorphic-fetch';
import cheerio from 'cheerio'

fetch('http://localhost:3000/posts')
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});

fetch('http://localhost:3000')
	.then((response) => {
		return response.text()
	})
	.then((string) => {
		const $ = cheerio.load(string)
		// elem.innerHTML = string;
		console.log(string)
		console.log($('div.container h4').html())
	})
