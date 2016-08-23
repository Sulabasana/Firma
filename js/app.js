$(document).ready(function() {
 var fast = $("#fast");
 var cross = $(".cross");
    cross.on("click", function(){
        fast.hide();
    });
 
 // var  
    // var slider = $(".slider").addClass("width960");
    // slider.clone()
    //     .removeClass("width960")
    //     .addClass("width767")
    //     .appendTo(".slider-wrapper");
    // slider.clone()
    //     .removeClass("width960")
    //     .addClass("width300")
    //     .appendTo(".slider-wrapper");
    // $(".slider").scrollable(); // uruchomienie sliderów


var coal = $('.coal');

 coal.on("click", function(){
    $(this).next().toggle();
 });
}); 