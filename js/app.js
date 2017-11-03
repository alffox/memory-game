var mouseClicks = 0;
var cardsContainer = $("#deck");
var cards = cardsContainer.children();
var openCards = [];

var timeCounter = $('#time_counter');
var elapsedSeconds = 0;
var isTimeRunning = false;

var movesCounter = $('#moves_counter');

var starCounter = $('#rating_counter');

// shuffle function readapted from http://jsfiddle.net/C6LPY/2/
$(function() {
    while (cards.length) {
        cardsContainer.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
});

$(cards).click(function() {
    var card = $(this);
    clicksCounter();
    timer();
    revealCard();
    cardMatcher();

    function clicksCounter() {
        mouseClicks++;
        movesCounter.text(mouseClicks);
        starRatingCounter();
    }

    function starRatingCounter() {
        if (mouseClicks === 1) {
            starCounter.text('★ ★ ★')
        } else if (mouseClicks === 2) {
            starCounter.text('★ ★')
        } else if (mouseClicks === 3) {
            starCounter.text('★')
        }
    }

    // timer function re-adapted from https://stackoverflow.com/questions/21670438/make-countdown-start-after-button-is-clicked
    function timer() {
        if (!isTimeRunning) {
            isTimeRunning = true;
            setInterval(function() {
                elapsedSeconds++;
                var elapsedTime = parseInt(elapsedSeconds / 60) + ':' + (elapsedSeconds % 60);
                timeCounter.text(elapsedTime);
            }, 1000);
        }
    }

    function revealCard() {
        $(card).removeClass('covered').addClass('no-click-area');
    }

    function cardMatcher() {
        openCards.push(card.attr('class'));
        if (openCards.length > 1) {
            for (var i = 1; i < openCards.length; i++) {
                if (openCards[i - 1] == openCards[i]) {
                    flipOver();
                } else {
                    flipBack();
                }
            }

            function flipOver() {
                $('#deck .no-click-area').addClass('matched').removeClass('no-click-area');
                openCards.splice(openCards[i]);
                if ($('#deck .matched').length === 16) {
                    alert("yeeeeeeeeeeeea ! You won, old chap !")
                }
            }

            function flipBack() {
                openCards.splice(openCards[i]);
                $('#deck .no-click-area').toggleClass('unmatched');
                $(cardsContainer).addClass('no-click-area'); //while animation is playing, click on other cards should not be possible
                setTimeout(function() {
                    $('#deck .unmatched').removeClass('unmatched no-click-area').addClass('covered');
                    $(cardsContainer).toggleClass('no-click-area'); //after animation is finished, cards become clickable again
                }, 1000);
                return;
            }
        }
    }

    $("#button").off().click(function() {
                if (confirm('You will lose your current progress, are you sure you want to proceed ?')) {
                    location.reload();
                } else {}
    });

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