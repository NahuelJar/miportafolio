<?php
$nombre = $_POST['name'];
$apellido = $_POST['lastname'];
$mail = $_POST['email'];
$asunto = $_POST['asunto'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'nahuelgonzaleznahuelg2014@gmail.com';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>