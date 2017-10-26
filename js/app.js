$('.col-md-3').click(function(clickOne) {
    $(this).find('span').removeClass('face-down');
    var cardOne = $(this).find('span').attr('class');
    console.log("card one value is "+ cardOne);
});