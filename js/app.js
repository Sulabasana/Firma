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


   $('.bxslider').bxSlider();


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