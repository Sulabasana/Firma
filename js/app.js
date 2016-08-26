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

var coal = $('.coal');

 coal.on("click", function(){
    $(this).next().toggle();
 });

  var triggers = $("ul.triggers li");
  var images = $("ul.images li");
  var lastElement = images.length-1;
  var target;
  var next = $('.next');
  var prev = $('.prev');

  console.log(triggers, images, lastElement);
  triggers.first().addClass('active');
  images.hide().first().show();

  function sliderResponse(target){
     images.fadeOut(0).eq(target).fadeIn(2000);
    triggers.removeClass('active').eq(target).addClass('active');
    }
   
   triggers.click(function(){
    if(!$(this).hasClass('active')){
      target = $(this).index();
      sliderResponse(target);
      resetTiming(); // żeby odliczało od początku po kliknięciu w przycisk
    }
   });
   next.click(function(){
      target = $('ul.triggers li.active').index();
      if( target === lastElement){
        target = 0;
      } else{
        target += 1;
      }
      sliderResponse(target);
      resetTiming();
  });
   prev.click(function(){
    target = $('ul.triggers li.active').index();
    if(target === 0){
      target = lastElement;
    }else{
      target -= 1;
    }
      sliderResponse(target);
      resetTiming();
  });
   function sliderTiming (){
      target = $('ul.triggers li.active').index();
      if(target === lastElement){
        target = 0;
      }else{
        target += 1;
      }
       sliderResponse(target);
     
   }
   var timingRun = setInterval(function() { sliderTiming(); },7000);
    function resetTiming() {
      clearInterval(timingRun);
      timingRun = setInterval(function() { sliderTiming(); },7000);
    }
   
   $(window).resize(function() {
   if (window.innerWidth < 950){
      images.show();
      clearInterval(timingRun);
   }
});

   // $('.bxslider').bxSlider();


  // function Slider(){
  //       var slider = $(".slider ul");
  //       var next = $("#next");
  //       var prev = $("#prev");
  //       slider.eq(1).delay(5000).hide("slide", {direction:"left"}, 500);
  //       var sc = $(".slider img").length;
  //       var count = 2;
  //       setInterval(function (){
  //           slider.eq(1+count).show("slide", {direction:"right"},500);
  //           slider.eq(1+count).delay(5500).hide("slide",{direction:"left"}, 500);
  //               if(count == sc){
  //                   count = 0;
  //               }else{
  //                   count +=1;
  //               }
  //           },6500);
  //       console.log(slider.eq(1))
  //       };
    
  //   Slider();
 // 



}); 