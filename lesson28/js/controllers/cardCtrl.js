// JavaScript source code
angular.module('app').controller('cardCtrl', function (cardFactory) {
    this.deleteCard = function (card) {
        cardFactory.deleteCard(card);
    };
});