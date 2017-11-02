//var mouseClicks = 0;
var cardsContainer = $("#deck");
var cards = cardsContainer.children();
var openCards = [];

$(function() {
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
        $(card).removeClass('covered').addClass('no-click-area');
    }

    function cardMatcher() {
        openCards.push(card.attr('class'));
        if (openCards.length > 1) {
            //console.log("card array is: " + openCards);
            //console.log("the list has more than 1 item");
            for (var i = 1; i < openCards.length; i++) {
                if (openCards[i - 1] == openCards[i]) {
                    flipOver();
                }
                else {
                    flipBack();
                }
            }

            function flipOver() {
                console.log("there is a match !");
                $('#deck .no-click-area').addClass('matched').removeClass('no-click-area');
                openCards.splice(openCards[i]);
                console.log("new array is: " + openCards);
            }

            function flipBack () {
                console.log("failed match !");
                $('#deck .no-click-area').addClass('unmatched');
            }
        }
    }


});



/*Create a list that holds all of your cards

Display the cards on the page
   - shuffle the list of cards using the provided "shuffle" method below
   - loop through each card and create its HTML
   - add each card's HTML to the page
   */

// Shuffle function from http://stackoverflow.com/a/2450976*/
/*function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}*/


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/*$('.col-md-3').click(function() {
    mouseClicks += 1;
    $(this).addClass('no-click-area');
    $(this).find('span').removeClass('covered');
    console.log("clicks count: "+ mouseClicks);
});*/

/*$(function () {
    var parent = $("#deck");
    var cards = parent.children();
    while (cards.length) {
        parent.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
});*/

/*var mycards = $('*[class^="card-"]');
console.log(mycards);*/


/*$('.mycard').click(function() {
    mouseClicks += 1;
    $(this).addClass('no-click-area');
    $(this).find('span').removeClass('covered');
    console.log("clicks count: "+ mouseClicks);
});*/


/*        var cardOne = $(this).find('span').attr('class');
    console.log("card one value is "+ cardOne);

    var cardTwo = $(this).find('span').attr('class');
    console.log("card two value is "+ cardTwo);

    if (cardOne === cardTwo) {
            console.log("they match!");
        }*/

/*var mouseClicks = 0;

$('.col-md-3').click(function() {
    mouseClicks += 1;
    $(this).addClass('no-clicks');
    $(this).find('span').removeClass('face-down');
    console.log("clicks count: "+ mouseClicks);

        var cardOne = $(this).find('span').attr('class');
    console.log("card one value is "+ cardOne);

    var cardTwo = $(this).find('span').attr('class');
    console.log("card two value is "+ cardTwo);

    if (cardOne === cardTwo) {
            console.log("they match!");
        }
    });*/

        /*if (cardOne === cardTwo) {
            console.log("they match!");
        }*/