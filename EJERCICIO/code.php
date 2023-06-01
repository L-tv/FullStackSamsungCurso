<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrate</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="grupo">
        
        <form method="POST" action="">
            <h2>Formulario de registro:</h2>

            <label for="nombre">Nombre: <span>Requerido</span> </label>
            <br>
            <input type="text" name="nombre" class="form-input" required> 
            <br>

            <label for="apellido">Apellido: <span>Requerido</span> </label>
            <br>
            <input type="text" name="apellido" class="form-input" required> 
            <br>

            <label for="email">Email: <span>Requerido</span> </label>
            <br>
            <input type="email" name="email" class="form-input" required> 

            <br>
            <input class="boton" name="submit" type="submit" value="Suscribirse">
        

        </form>
        

    </div>

<?php
    
if($_POST){
    $nombre = $_POST ['nombre'];
    $apellido = $_POST ['apellido'];
    $email = $_POST ['email'];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "usuarios";

    $conection = new mysqli($servername, $username, $password, $dbname);

    if ($conection-> connect_error) {
        die("Connection failed: " . $conection->connect_error);
    }

    $sql = "INSERT INTO usuario (nombre, apellido, email) 
    VALUES ('$nombre', '$apellido', '$email')";

    if ($conection-> query($sql) === TRUE){
        echo "Nuevo usuario guardado";
    } else {
        echo "Error: " . $sql . "<br>" . $conection->error;
    }

    $conection->close();
}

?>

</body>
</html> 