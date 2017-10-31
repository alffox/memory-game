//var mouseClicks = 0;
var cardsContainer = $("#deck");
var cards = cardsContainer.children();
var openCards = [];

$(function () {
    while (cards.length) {
        cardsContainer.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
});