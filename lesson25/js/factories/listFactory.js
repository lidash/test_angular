// JavaScript source code
angular.module('app').factory('listFactory', function () {
    var service = {};
    var lists = [
        {
            id: 1,
            listName: 'Todo'
        },
        {
            id: 1,
            listName: 'Doing'
        },
        {
            id: 1,
            listName: 'Done'
        }
    ];

    service.getLists = function () {
        return lists;
    };
    return service;
});