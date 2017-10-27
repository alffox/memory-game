




/* Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);*/








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