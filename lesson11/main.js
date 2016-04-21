var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
	$scope.name = "Bob";
})

app.directive('fooBar', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		 template: "This is my super directive", // <div ng-transclude></div> <ng-transclude></ng-transclude>",
		// templateUrl: '',
		// replace: true,
		 transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs, ctrl, transclude) {
			console.log('This is my super directive');
			transclude(scope, function(clone, scope){
				console.log('!', clone, scope);
				element.append(clone);
			})
		}

	};
});