(function(){
	var app = angular.module('store', []); //app, module of angular, app name = store, array gets dependencies (None so far)
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [

		{
			name: 'Dodecahedron',
			price: 2,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . . ',
			canPurchase: false,
		}
	];


})(); // Good habit to wrap the application in a closure.