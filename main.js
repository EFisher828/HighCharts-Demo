let url = 'https://econet.climate.ncsu.edu/dev/currcond/gfather/currentconditions.php?station=BEAR'

const xhr = new XMLHttpRequest();

xhr.responseType = 'json';
					
xhr.onreadystatechange = function() {
	if(xhr.readyState === XMLHttpRequest.DONE){
		console.log(xhr.response);
	}
}
					
xhr.open("GET",url)
xhr.send()

document.addEventListener('DOMContentLoaded', () => {
	Highcharts.chart('container', {
		chart: {
			type: 'areaspline',
			zoomType: 'x'
		},
		title: {
			text: 'My First Chart'
		},
		tooltip: {
			formatter() {
				let s = `<strong>X is: </strong> ${this.x}`;
				this.points.forEach(function(point) {
					s += `<br>${point.series.name} is: ${point.y}`;
				});
				return s;
			},
			shared: true,
			backgroundColor: '#333333',
			borderColor: 'red',
			borderRadius: 20,
			style: {
				color: "#ffffff"
			}
		},
		colors: ['#ffb997','#f67e7d'],
		yAxis: {
			title: {
				text: 'Fruits Eaten'
			}
		},
		xAxis: {
			//categories: ['Apples','Bananas', 'Oranges']
		},
		series: [{
			name: 'John',
			data: [1,2,3,30,100,50,2,1,20,90,230,120,40,-20,-60,-10,0],
			zones: [
				{
					value: 0,
					color: '#f7a35c'
				},
				{
					value: 10,
					color: '#7cb5ec'
				},
				{
					color: '#90ed7d'
				}
			]
		}]
	});
})
