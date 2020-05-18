<?php
/*adresse du serveur: adresse IP ou le nom de la Hote (localhost=serveur local).*/
$server="localhost"; 
/*nom de l'utilisateur ayant droit sur la bdd*/
$user="root"; 
//mot de passe de cet utilisateur 
$pwd="";
/*nom de la base de données.*/
$db = "react_bd";  
// connexion au serveur MYSQL et à la source de données
$conn=mysqli_connect ($server, $user, $pwd, $db);
?>