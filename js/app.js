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
    cardMatcher();
    //console.log("clicks count: "+ mouseClicks);

    function revealCard() {
        $(card).addClass('no-click-area');
        $(card).removeClass('covered');
    }

    function cardMatcher() {
        openCards.push(card.attr('class'));
        if (openCards.length > 1) {
            console.log("card array is: " + openCards);
            console.log("the list has more than 1 item");
            for ( var i = 1; i < openCards.length; i++ ){
                if(openCards[i-1] == openCards[i]) {
                    console.log("there is a match !");
                    openCards.splice(openCards[i], 2);
                    console.log("new array is "+ openCards);
                }
            }
        }
    }


});