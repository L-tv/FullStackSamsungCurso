<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Records</title>
    <link rel="stylesheet" href="styledata.css">
</head>    
<body>
<?php

    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "usuarios";
    

    $connection = mysqli_connect ($host, $username, $password, $dbname);
    
    if(!$connection)
    {
        die("Connection failed!" . mysqli_connect_error());
    }
    else 
    {
        echo "<br>";
    }

    $sql = "SELECT * FROM datos_registro";

    $result = mysqli_query($connection, $sql);

    if(mysqli_num_rows($result) > 0)
    {
        echo '<table> 
        <tr> 
        <th> NOMBRE </th> 
        <th> APELLIDO1 </th> 
        <th> APELLIDO2 </th> 
        <th> EMAIL </th>
        <th> USUARIO </th> 
        <th> CLAVE </th>
        </tr>';

       while($row = mysqli_fetch_assoc($result)){
        
           echo 
            '<tr> <td> ' . $row["NOMBRE"]. '</td> 
            <td> ' . $row["APELLIDO1"]. '</td> 
            <td> ' . $row["APELLIDO2"]. '</td> 
            <td> ' . $row["EMAIL"]. '</td> 
            <td> ' . $row["USUARIO"] . '</td> 
            <td> ' . $row["CLAVE"]. '</td> </tr>';
            
       }
       echo '</table>';
    }
    else
    {
        echo "0 results";
    }
    

    mysqli_close($connection);

?>


<button class="button" type="button" id="volver" name="volver" onclick="location.href='http://localhost/laboratorio_lidia/index.php'"  >Volver al formulario</button>


</body>
</html>    
