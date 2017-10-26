$('.col-md-3').click(function(clickOne) {
    $(this).find('span').removeClass('face-down');
    var cardOne = $(this).find('span').attr('class');
    console.log("card one value is "+ cardOne);

    $('.col-md-3').click(function(clickTwo) {
        $(this).find('span').removeClass('face-down');
        var cardTwo = $(this).find('span').attr('class');
        console.log("card two value is "+ cardTwo);

        if (cardOne === cardTwo) {
            console.log("they match!");
        }
    });
});