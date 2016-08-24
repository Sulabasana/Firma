$(document).ready(function() {

 var fast = $("#fast");
 var cross = $(".cross");
    cross.on("click", function(){
        fast.hide();
    });

     //tworzę funkcję.......
    function animateGallery (){
        var next = $("#next");
        var prev = $("#prev");
        var listElements = $("li");
        var ul = $("ul");
        var index = 0;
        var length = listElements.length;
        var pictureWidth = 600;
        
        var cloneFirst = listElem.eq(0).clone();
        var cloneLast = listElem.eq(length -1).clone();

        cloneFirst.appendTo(ul);
        cloneLast.prependTo(ul);
        
         ul.css({
            "width": ((length+2) * pictureWidth) + "px",
            "position": "relative",
            "left": -pictureWidth+"px"
        });
        console.log(length);

        next.on("click", function() {
             index++;
              if (index <= length){
         ul.animate({left: "-=" + pictureWidth + "px"}, 500, function(){
             if (index === length){
                 index = 0;
                 ul.css("left", 0+ "px");
             }
             else if (index === length-1){
                 index = 1;
                 ul.css("left", -pictureWidth + "px");
             }
         });
         console.log(index);
        }
           else {
               index = 1;
               ul.animate({left: -(length+1)*pictureWidth + "px"}, 500, function(){
                   ul.css("left", -400 + "px");
               });
           }
     });
     
     prev.on("click", function() {
         index--;
         if (index >= 0){
         ul.animate({left: "+=" + pictureWidth + "px"}, 500, function(){
             if (index <= 0){
                 index = length;
                 ul.css("left", -(length)*pictureWidth + "px");
             }
         });
         console.log(index);
         }
         else {
             index = length -1;
             ul.animate({left: pictureWidth + "px"}, 500, function(){
                 ul.css("left", -(length-1)*pictureWidth + "px");
             });
             
         }
  
     });


    var coal = $(".coal") ;

    coal.on("click", function() {
        $(this).parents("tr").next().slideToggle();
     return false;
     });
    }
});
// $(document).ready(function(){
   
//         //definiuje zmienne
//         var next = $("#nextPicture");
//         var prev = $("#prevPicture");
//         var listElem = $("li");
//         var ul = $("ul");
//         var index = 1;
//         var pictureWidth = 400;
        
//         //definiuje zmienne do klonowania
//         var cloneFirst = listElem.eq(0).clone();
//         var cloneLast = listElem.eq(listElem.length -1).clone();
        
//         //dolaczam do listy
//         cloneFirst.appendTo(ul);
//         cloneLast.prependTo(ul);
        
//         //definiuje zmienna okreslajaca dlugosc tablicy
//         var length = listElem.length;
        
//         //ustawiam szerokosc kontenera i pozycje relative
//         ul.css({
//             "width": ((length+2) * pictureWidth) + "px",
//             "position": "relative",
//             "left": -pictureWidth+"px"
//         });
//         console.log(listElem.length);
//     //event na przycisk next
//        next.on("click", function() {
//          index++;
//         if (index <= length){
//          ul.animate({left: "-=" + pictureWidth + "px"}, 500, function(){
//              if (index === length){
//                  index = 0;
//                  ul.css("left", 0+ "px");
//              }
// //             else if (index === length-1){
// //                 index = 1;
// //                 ul.css("left", -pictureWidth + "px");
// //             }
//          })
//          console.log(index);
//         }
//            else {
//                index = 1;
//                ul.animate({left: -(length+1)*pictureWidth + "px"}, 500, function(){
//                    ul.css("left", -400 + "px");
//                });
//            }
//      });
     
//      prev.on("click", function() {
//          index--;
//          if (index >= 0){
//          ul.animate({left: "+=" + pictureWidth + "px"}, 500, function(){
//              if (index <= 0){
//                  index = length;
//                  ul.css("left", -(length)*pictureWidth + "px");
//              }
//          })
//          console.log(index);
//          }
//          else {
//              index = length -1;
//              ul.animate({left: pictureWidth + "px"}, 500, function(){
//                  ul.css("left", -(length-1)*pictureWidth + "px");
//              })
             
//          }
  
//      });
// });
  



