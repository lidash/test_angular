// JavaScript source code
angular.module('app').controller('cardCtrl', function (cardFactory) {
    this.isEditing = false;
    this.editingCard = null;

    this.deleteCard = function (card) {
        cardFactory.deleteCard(card);
    };

    this.editCard = function (card) {
        this.isEditing = true;
        this.editingCard = angular.copy(card);
    };


});