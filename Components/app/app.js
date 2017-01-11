/**
* app Module
*
* Modulo que describe el uso de compomentes, plurazacioasnva y directivas 
* by
*/
angular.module('app', ['components'])
	.controller('BeerCounter', function($scope, $locale){
		$scope.beers = [0,1,2,3,4,5,6];
		switch ($locale.id){
			case 'es-cl':				
				$scope.beerForms = {
					0: 'Sin cerveza',
					one: '{} Cerveza',
					other: '{} Cerverzas'};
				break;
			case 'en-us':
			default:				
				$scope.beerForms = {
					0: 'no beers',
					one: '{} beer',
					other: '{} beers'};
				break;
		}
});