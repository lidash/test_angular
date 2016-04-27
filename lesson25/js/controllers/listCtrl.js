// JavaScript source code
angular.module('app').controller('listCtrl', function (listFactory) {
    // console.log('listCtrl');
    this.removeList = function (list) {
        listFactory.removeList(list);
    };
});
