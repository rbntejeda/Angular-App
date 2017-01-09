angular.module('Tareas',[])
	.controller('tareasController', [function(){
		var lista = this;
		// lista de tareas para desarrollar
		lista.tareas = [
			{
				titulo:'Leer angular',
				hecho:true
			},
			{
				titulo:'Construir aplicación angular',
				hecho:false	
			}
		];
		// Lista de tareas hechas
		lista.archivadas = [];
		// Agrega una nueva tarea a la lista
		lista.nuevaTarea = function () {
			if(lista.texto!==''){
				lista.tareas.push({titulo:lista.texto,hecho:false});
				lista.texto = '';			
			}
		};
		// cuenta cuantas tareas listas existen
		lista.conteo = function () {
			var count = 0 ;
			angular.forEach(lista.tareas,function (tarea) {
				count += tarea.hecho ? 0 : 1;
			});
			return count;
		};
		lista.archivar = function () {
			var porHacer=[];
			angular.forEach(lista.tareas,function (tarea) {
				if(tarea.hecho){
					lista.archivadas.push(tarea);
				}else{
					porHacer.push(tarea);
				}
			});
			lista.tareas=porHacer;
			console.log(lista.archivadas);
		}
	}]);