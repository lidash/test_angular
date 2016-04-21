var app = angular.module('app', []);

app.directive('uiSource', function(){
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
		// transclude: true,
		 compile: function(elem) {
		 	//console.log(elem);
		 	var escape = function (content) {
		 		return content.replace(/\</g,'&lt;')
		 						.replace(/\>/g, '&gt;');
		 	};
		 	var pre = angular.element('<pre class="prettyprint"></pre>');
		 	var pretty = prettyPrintOne(escape(elem.html()));
		 	console.log(pretty);
		 	pre.append(pretty);
		 	elem.replaceWith(pre);
		 	//console.log(pretty);
		 	//console.log(pre);
		 }
		//link: function($scope, iElm, iAttrs, controller) {
			
		//}
	};
});