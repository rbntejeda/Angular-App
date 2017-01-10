var app=angular.module('proyecto',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		// var resolveProyectos = {
		// 	proyectos: function (proyectoResource) {
		// 		return proyectoResource.getAll();
		// 	}
		// };

		$routeProvider
		.when('/',{
			controller:'ProyectoListController as proyectoList',
			templateUrl:'list.html',
			resolve: {
				proyectos: function (proyectoResource) 
				{
					return proyectoResource.getAll();
				}
			}
		})
		.when('/edit/:key',{
			controller:'EditProyectoController as editProyecto',
			templateUrl:'form.html',
			// resolve: {
			// 	proyecto: function (proyectoResource) {
			// 		return proyectoResource.getByPk($route.current.params.key);
			// 	}
			// }
		})
		.when('/new',{
			controller:'NewProyectoController as editProyecto',
			templateUrl:'form.html',
			// resolve: resolveProyectos
		})
		.otherwise({
			redirectTo:'/'
		});
	}])

	.controller('ProyectoListController', function(proyectos){
		proyectoList=this;
		proyectoList.proyectos = proyectos;
	})

	.controller('NewProyectoController', function($location,proyectoResource){
		var editProyecto = this;
		editProyecto.save=function() {
			proyectoResource.save(this.proyecto);
			$location.path('/');
		};
	})

	.controller('EditProyectoController', function($location,proyectoResource,$routeParams){
		var editProyecto = this;
		editProyecto.proyecto=proyectoResource.getByPk($routeParams.key);
		editProyecto.save=function() {
			proyectoResource.save(this.proyecto);
			$location.path('/');
		};
		editProyecto.destroy=function() {
			proyectoResource.delete(this.proyecto);
			$location.path('/');
		}
		// console.log(proyectoResource.getByPk($routeParams.key));
	})