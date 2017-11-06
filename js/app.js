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
            interval = setInterval(function() {
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
                    clearInterval(interval);
                    alert("yeeeeeeeeeeeea ! You won, old chap !")
                    triggerModal();
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

/*Modal inspired by https://www.w3schools.com/howto/howto_css_modals.asp*/

/* ========= Modal ========= */

var modal = $('#myModal');
var closeModal = $('.close');

function triggerModal() {
    modal.show();
}

closeModal.click(function() {
    modal.hide();
});

// When the user clicks on modal, close it
modal.click(function( event ) {
        console.log("last function called");
        modal.hide();
    });

/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/