// JavaScript source code
var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    this.myLesson = "Main Lesson";
    this.endLesson = function () {
        console.log('addLesson');
    };
    $scope.mainCtrl = this;
});

app.controller('firstCtrl', function () {
    this.myLesson = "First Lesson";
});
app.controller('secondCtrl', function () {
   this.myLesson = "Second Lesson";
});