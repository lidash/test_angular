var app = angular.module('app', []);

app.directive('wrapIn', function($templateCache){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		 transclude: 'element',
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs, ctrl, transclude) {
			var template = $templateCache.get(attrs.wrapIn);
			var templateElement = angular.element(template);
		//	console.log('wrapIn', templateElement);
			transclude(scope, function(clone){
				//console.log(clone);
				element.after(templateElement.append(clone));
			})
		}
	};
});