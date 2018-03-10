<?php

$destino = "pukllayperu@outlook.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$motivo = "Suscripcion a Pukllay";

$mensaje = "Aquí les dejo mi informacion para la suscripcion y poder saber acerca de las novedades que puedan tener. \nNombre: ". $nombre. "\nCorreo: " .$correo. " \nMuchas gracias.";

mail($destino, $motivo, $mensaje);

header("Location: gracias.html");

?>