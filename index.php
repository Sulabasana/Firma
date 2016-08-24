<?php

$name =  $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['mail'];
$message = $_POST['message'];
$to      = 'piotr.frydrysza@interia.pl';
$subject = $_POST['subject'];
$body = "From: $name\n $surname\n E-Mail: $email\n Message:\n $message";
if($_SERVER['REQUEST_METHOD' ] === 'POST'){
if (isset($_POST['submit'])) {
    if (mail($to, $subject, $body)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}


?>