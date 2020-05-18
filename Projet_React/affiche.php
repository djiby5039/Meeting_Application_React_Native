<?php
require_once('Connect.php');
 
$result  =  "Select * from reunion";

$query_select=mysqli_query($conn,$result) or die(mysqli_error($conn));

while($row[] = mysqli_fetch_assoc($query_select)){

    $json = json_encode($row);
}


echo $json;

?>