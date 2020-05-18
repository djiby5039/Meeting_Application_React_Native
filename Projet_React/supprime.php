<?php

require_once('Connect.php');

$obj = json_decode(file_get_contents('php://input'), true);

//$theme = $obj['theme'];
//$salle = $obj['salle'];
//$adresse = $obj['adresse'];
//$meeting = $obj['meeting'];

// ta requête
$sql="DELETE FROM reunion where id_gp=$id";

$query_select=mysqli_query($conn,$sql_select) or die(mysqli_error($conn));

//execution de la requete
$liste=mysqli_fetch_array($query_select);

//retour json qui sera traiter côté react native
echo json_encode(array($liste));
?>