function validate(){
 
 var name = $('#name').val();
 var surname = $('#surname').val();
 var mail = $('#mail').val();
 var subj = $('#subject').val();
 var text = $('textarea').val();
 var dataString = 'name='+ name + '&surname='+ surname + '&email='+ mail + '&subject='+ subj + '&text='+ text;

if(name==''||surname==''||mail==''||subj==''||text==''){
alert("Proszę wypełnić wszystkie pola");
}else{
    $.ajax({
    type: "POST",
    url: "/php/index.php",
    data: dataString,
    
    }).done(function (response) {
        alert("działa");
    }).fail(function (error) {
        alert(error);
             });
    }
   }
$('input[type="submit"]').click(function(e){
        e.preventDefault();
        validate();
     });      

    
// var data = name = "name"  &surname = "surname" 