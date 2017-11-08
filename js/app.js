var mouseClicks = 0;
var cardsContainer = $("#deck");
var cards = cardsContainer.children();
var openCards = [];

var timeCounter = $('.time-counter');
var elapsedSeconds = 0;
var isTimeRunning = false;

var movesCounter = $('.moves-counter');

var starCounter = $('.rating-counter');

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

/* ====== Modal inspired by https://www.w3schools.com/howto/howto_css_modals.asp ====== */
//TODO: the part below will need to be refactored to jQuery for consistency

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function triggerModal() {
modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#play_again").off().click(function() {
                    location.reload();
    });