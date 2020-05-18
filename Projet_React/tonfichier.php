<?php

require_once('Connect.php');

$obj = json_decode(file_get_contents('php://input'), true);

$theme = $obj['theme'];
$salle = $obj['salle'];
$adresse = $obj['adresse'];
$meeting = $obj['meeting'];

// ta requête
$sql_ajout="insert into reunion values(null,'$theme','$salle','$adresse' ,'$meeting')";

$query_ajout=mysqli_query($conn,$sql_ajout) or die(mysqli_error($conn));

//retour json qui sera traiter côté react native
echo json_encode("OK");

?>