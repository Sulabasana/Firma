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

var coal = $('.Wegiel'); 
var butt = $('.offer button');
var descr = $('.descr');
var offer = $('.offer');

 coal.click(function(){
    $(this).next().show();
    coal.hide();
    $(this).show();
    butt.addClass('active');
 });
 butt.click(function(){
  descr.hide();
  butt.removeClass('active');
  coal.show();
 });
 
  var triggers = $("ul.triggers li");
  var images = $("ul.images li");
  var lastElement = images.length-1;
  var target;
  var next = $('.next');
  var prev = $('.prev');


  triggers.first().addClass('active');
  images.hide().first().show();

  function sliderResponse(target){
     images.fadeOut(0).eq(target).fadeIn(500);
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
      function lt950(){
      var mask = $('.mask');
      var header = mask.find($('h2'));
      var header2 = mask.find($('h3'));
      if(window.innerWidth < 950){
      images.show();
      clearInterval(timingRun);
      header.hide();
      header2.addClass('visible');
      var navig = $('.list1').find('li')
      navig.addClass('min');
      }
    }
   $(window).resize(function() {
   if (window.innerWidth < 950){
      images.show();
      clearInterval(timingRun);
      
   }
});
   $(window).resize(function(){
   	if(window.innerWidth > 950){
      images.hide().first().show();
   		clearInterval(timingRun);
     	timingRun = setInterval(function() { sliderTiming(); },7000);
   	}
   })
  
   $(window).resize(function() {
    var mask = $('.mask');
    var header = mask.find($('h2'));
    var photo = mask.find($('img'));
    var header2 = mask.find($('h3'));
    if (window.innerWidth < 950){
      header.hide();
      header2.addClass('visible'); //to trzeba chyba emberem zrobić...
      
   }
   else if(window.innerWidth > 950){
      header.show();
      header2.removeClass('visible');

   }
});
   $(window).resize(function() {
    if (window.innerWidth < 1024){
      var navig = $('.list1').find('li')
      navig.addClass('min');
    }
    else if(window.innerWidth >1024){
     var navig = $('.list1').find('li')
     navig.removeClass('min');

   }
  });
   lt950();
// function writeCookie(cookieName, cookieValue, expires, domain,
//     path, secureFlag) {
//     if (cookieName) {
//         var cookieDetails = cookieName + "=" + 
//             escape(cookieValue);
         
//         cookieDetails += (expires ? "; expires=" +
//             expires.toGMTString(): '');
 
//         cookieDetails += (domain ? "; domain=" + domain: '');
//         cookieDetails += (path ? "; path=" + path: '');
//         cookieDetails += (secureFlag ? "; secure": '');
//         document.cookie = cookieDetails;
//     }
// }
  


}); 