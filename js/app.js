let mouseClicks = 0;
const cardsContainer = $(".deck");
const cards = cardsContainer.children();
let openCards = [];

let timeCounter = $('.time-counter');
let elapsedSeconds = 0;
let isTimeRunning = false;

const movesCounter = $('.moves-counter');

const starCounter = $('.rating-counter');

// shuffle function readapted from http://jsfiddle.net/C6LPY/2/
$(function() {
    while (cards.length) {
        cardsContainer.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
});

$(cards).click(function() {
    let card = $(this);
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
        if (mouseClicks === 16) {
            starCounter.text('★ ★ ★')
        } else if (mouseClicks === 32) {
            starCounter.text('★ ★')
        } else if (mouseClicks === 48) {
            starCounter.text('★')
        }
    }

    // timer function re-adapted from https://stackoverflow.com/questions/21670438/make-countdown-start-after-button-is-clicked
    function timer() {
        if (!isTimeRunning) {
            isTimeRunning = true; //shield function to prevent it from being ran at each mouse click
            interval = setInterval(function() {
                elapsedSeconds++;
                let elapsedTime = parseInt(elapsedSeconds / 60) + ':' + (elapsedSeconds % 60);
                timeCounter.text(elapsedTime); //TODO add zero's when values are less than 10
            }, 1000);
        }
    }

    function revealCard() {
        $(card).removeClass('covered').addClass('no-click-area');
    }

    function cardMatcher() {
        openCards.push(card.attr('class'));
        if (openCards.length > 1) {
            for (let i = 1; i < openCards.length; i++) {
                if (openCards[i - 1] == openCards[i]) {
                    flipOver();
                } else {
                    flipBack();
                }
            }

            function flipOver() {
                $('.deck .no-click-area').addClass('matched').removeClass('no-click-area');
                openCards.splice(openCards); //flush cards from array
                if ($('.deck .matched').length === 16) {
                    clearInterval(interval);
                    triggerModal();
                }
            }

            function flipBack() {
                openCards.splice(openCards);
                $('.deck .no-click-area').toggleClass('unmatched');
                $(cardsContainer).addClass('no-click-area'); //while animation is playing, click on other cards should not be possible
                setTimeout(function() {
                    $('.deck .unmatched').removeClass('unmatched no-click-area').addClass('covered');
                    $(cardsContainer).toggleClass('no-click-area'); //after animation is finished, cards become clickable again
                }, 1300);
                return;
            }
        }
    }

    $("#restart_button").off().click(function() {
        if (confirm('You will lose your current progress, are you sure you want to proceed ?')) {
            location.reload();
        } else {}
    });


});

/* ====== Modal inspired by https://www.w3schools.com/howto/howto_css_modals.asp ====== */
//TODO: the part below will need to be refactored to jQuery for consistency

const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];

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

$("#replay_button").off().click(function() {
    location.reload();
});