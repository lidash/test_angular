var app = angular.module('app', []);// JavaScript source code

app.directive('fooBar', function () {
    var bookmarks = [
        {
            id: 1,
            name: 'EmberJS'

    },
    {
        id: 2,
        name: 'AngularJS'
    }

    ];
    return {
        restrict: 'E',
        templateUrl: "bookmarks.html",
        link: function (scope, element, attrs) {
            console.log('directive');
            scope.bookmarks = bookmarks;
        }
    };
});