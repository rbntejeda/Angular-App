'use strict';

app.factory('proyectoResource', function($cacheFactory){
	var proyectos=[
		  {
		  	$id: 1,
		    name: 'AngularJS',
		    site: 'http://angularjs.org',
		    description: 'HTML enhanced for web apps!'
		  },
		  {
		  	$id: 2,
		    name: 'Angular 2',
		    site: 'http://angular.io',
		    description: 'One framework. Mobile and desktop.'
		  },
		  {
		  	$id: 3,
		    name: 'jQuery',
		    site: 'http://jquery.com/',
		    description: 'Write less, do more.'
		  },
		  {
		  	$id: 4,
		    name: 'Backbone',
		    site: 'http://backbonejs.org/',
		    description: 'Models for your apps.'
		  },
		  {
		  	$id: 5,
		    name: 'SproutCore',
		    site: 'http://sproutcore.com/',
		    description: 'A Framework for Innovative web-apps.'
		  },
		  {
		  	$id: 6,
		    name: 'Polymer',
		    site: 'https://www.polymer-project.org/',
		    description: 'Reusable components for the modern web.'
		  },
		  {
		  	$id: 7,
		    name: 'Spine',
		    site: 'http://spinejs.com/',
		    description: 'Awesome MVC Apps.'
		  },
		  {
		  	$id: 8,
		    name: 'Cappucino',
		    site: 'http://www.cappuccino-project.org/',
		    description: 'Objective-J.'
		  },
		  {
		  	$id: 9,
		    name: 'Knockout',
		    site: 'http://knockoutjs.com/',
		    description: 'MVVM pattern.'
		  },
		  {
		  	$id: 10,
		    name: 'GWT',
		    site: 'http://www.gwtproject.org/',
		    description: 'JS in Java.'
		  },
		  {
		  	$id: 11,
		    name: 'Ember',
		    site: 'http://emberjs.com/',
		    description: 'Ambitious web apps.'
		  },
		  {
		  	$id: 12,
		    name: 'React',
		    site: 'https://facebook.github.io/react/',
		    description: 'A JavaScript library for building user interfaces.'
		  }
		];
	

	return {
		getAll: function () {
			return proyectos;
		},
		getByPk(id){
			id=parseInt(id);
			return _(proyectos).findWhere({$id:id});
		},
		save(element){
			if(element.$id){
				var id=parseInt(element.$id);
				element.$id=id;
				var current =_(proyectos).findWhere({$id:id});
				current=element;
			}else{
				element.$id=proyectos.length+1;
				proyectos.push(element);
			}
		},
		delete(object){
			proyectos=_.without(proyectos,object);
		}
	}
	});

