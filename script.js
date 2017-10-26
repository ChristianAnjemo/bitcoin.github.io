// Our labels along the x-axis
var years = ['January','February','March','April','May','June','July','August','September'];
// For drawing the lines
var africa = [967,1190,1079,1349,2328,2504,2873,4764,4349];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa,
        label:'BTC',
        fill:true,
        borderColor:'orange',
        pointHoverBorderColor: 'white'

      }
    
    ]
  }
});
/*CURRENT BTC VALUE API
*/
var url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';

 fetch (url)
 	.then( function(response) {
 		return response.json();
	}).then (function(response) {
		var coinval = document.getElementById("coinval");
		coinval.innerHTML = response.USD
	})


