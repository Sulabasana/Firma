$(document).ready(function() {
//     //zapisywanie danych do zmiennych
//     var next = $("#next");
//     var prev = $("#prev");
//     var slid = $('.slider');
//     var listItems = slid.find("li");
//     var galleryContainer = slid.find("ul");
//     var index = 1;
//     var width = 400;
    
//     // KOD DO ZADANIA InfiniteGallery 
//     // Klonowanie pierwszego i ostatniego elementu i dodanie od listy
//     listItems.eq(0).before(listItems.eq(listItems.length-1).clone());
//     listItems.eq(listItems.length-1).after(listItems.eq(0).clone());
//     listItems = $("li");
//     var galleryLength = listItems.length;
//     // ustawienie szerokości kontenera ul
//     galleryContainer.css("width", width*galleryLength +"px");
//     // ustawienie pozycji
//     galleryContainer.css("left", -400);
//     // event dla next
//     next.on("click", function() {
//         index++;
//         if(index>galleryLength-2) {
//             index = 1;
// //            galleryContainer.animate(
// //            {left: 0}, 500);
//             galleryContainer.animate(
//             {left: "-="+width+"px"}, 500, function() {
//                 $(this).css("left", -400);
//             });
//         } else {
//             galleryContainer.animate(
//             {left: "-="+width+"px"}, 500);
//         } console.log(index);
//     });
    
//     prev.on("click", function() {
//         index--;
//         if(index<1) {
//             index = galleryLength-2;
// //            galleryContainer.animate(
// //            {left: -2000}, 500);
//             galleryContainer.animate(
//             {left: "+="+width+"px"}, 500, function() {
//                 $(this).css("left", -(width*galleryLength-800));
//                 console.log(-(width*galleryLength-800));
//             });
//         } else {
//             galleryContainer.animate(
//             {left: "+="+width+"px"}, 500);
//         } console.log(index);
//     });
var coal = $('.coal');

 coal.on("click", function(){
    $(this).next().toggle();
 });
}); 