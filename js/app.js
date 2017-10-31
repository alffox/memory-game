//var mouseClicks = 0;
var cardsContainer = $("#deck");
var cards = cardsContainer.children();
var openCards = [];

$(function () {
    while (cards.length) {
        cardsContainer.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
});

$(cards).click(function() {
    var card = $(this);
    //mouseClicks += 1;
    revealCard();

    //console.log("clicks count: "+ mouseClicks);

    function revealCard() {
        $(card).addClass('no-click-area');
        $(card).removeClass('covered');
    }