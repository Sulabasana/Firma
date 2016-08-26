<?php
$name =  $_GET['name'];
$surname = $_GET['surname'];
$email = $_GET['email'];
$message = $_GET['text'];
$to      = 'piotr.frydryszak@interia.pl';
$subject = $_GET['subject'];
$body = "From: $name\n $surname\n E-Mail: $email\n Message:\n $message";

$headers = "From: " . $email;

if($_SERVER['REQUEST_METHOD' ] === 'GET'){
	if (isset($_POST['submit'])) {
    	if (mail($to, $subject, $body, $headers)) {
        	echo 'ok';
    	} else {
        	echo 'Fehler';
    	}
    }
}

?>