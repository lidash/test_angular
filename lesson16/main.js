var app = angular.module('app', []);// JavaScript source code

app.controller('firstCtrl', function ($scope) {
    $scope.name = 'Harry';
    $scope.color = '#333333';
    $scope.reverse = function () {
        $scope.name = $scope.name.split('').reverse().join('');
    };
});

app.directive('fooBar', function () {
    return {
        scope: {
            name: '@', //read only
            color: '=',//двостороннє bind
            reverse: '&' //виконати вираз з батьківського контролера, для виклику функції
        },
        template: "<div>My name is {{name}} <input type='text' ng-model='name'></div>" +
            "<div>My color is {{color}} <input type='text' ng-model='color'></div>"+
            "<button ng-click='reverse()'>Reverse</button>",
        link: function(scope, element, attrs) {
          
            console.log('fooBar');
        }
      };
});