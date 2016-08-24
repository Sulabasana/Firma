$(document).ready(function() {
    var menuElement = $("nav"); 
    var links = menuElement.find($("a")); 
      links.on('click', function(){ 
       var hrefValue = $(this).attr("href");
       var hrefValueOffset = $(hrefValue).offset(); 
     $("body, html").animate({"scrollTop": hrefValueOffset.top
}, 2000); 
    });
 
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