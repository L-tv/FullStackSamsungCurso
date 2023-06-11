<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "usuarios";
    
try{
    $conn = mysqli_connect($servername, $username, $password, $dbname);
}

catch(mysqli_sql_exemption){
    echo "No hay conexión! <br>";
}

?>