




function makeUrl ( target , result) {
	
	var url = "https://min-api.cryptocompare.com/data/price?fsym=" + target + "&tsyms=" + result;
	return url;
}

function getData(url) {
	fetch(url)
	.then(function(response) {
		return response.json();
	}).then(function(response){
		console.log(response);
	})

}



getData(makeUrl('BTC','USD'));

document.write()





