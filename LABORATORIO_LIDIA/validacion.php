

<?php 

    include'submit.php';

?>


<?php

$nombreErr = $primer_apellidoErr = $segundo_apellidoErr = $emailErr = $usuarioErr = $claveErr = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = filter_input(INPUT_POST, "nombre", FILTER_SANITIZE_SPECIAL_CHARS);
    $primer_apellido = filter_input(INPUT_POST, "apellido1", FILTER_SANITIZE_SPECIAL_CHARS);
    $segundo_apellido = filter_input(INPUT_POST, "apellido2", FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
    $usuario = filter_input(INPUT_POST, "login", FILTER_SANITIZE_SPECIAL_CHARS);
    $clave = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        
    if (empty($nombre)) {

        $nombreErr = "No puede dejar el campo en blanco";
    
    } else if (!preg_match("/^[a-zA-Z-'´`ñÑ ]*$/", $nombre)) {

            $nombreErr = "No se admiten números ni caracteres especiales";

    } else {

        $nombre = mb_strtolower($nombre);
            
    }    

    if (empty($_POST["apellido1"])) {
        $primer_apellidoErr = "No puede dejar el campo en blanco";

    }else if (!preg_match("/^[a-zA-Z-'´`ñÑ ]*$/",$primer_apellido)) {

        $primer_apellidoErr = "No se admiten números ni caracteres especiales";

    } else {

        $primer_apellido = mb_strtolower($primer_apellido);       
    }

    if (empty($_POST["apellido2"])) {

        $segundo_apellidoErr = "No puede dejar el campo en blanco";

    } else if (!preg_match("/^[a-zA-Z-'´`ñÑ` ]*$/",$segundo_apellido)) {

        $segundo_apellidoErr = "No se admiten números ni caracteres especiales";
         
    } else {

        $segundo_apellido = mb_strtolower($segundo_apellido);
    }

    if (empty($_POST["email"])) {

        $emailErr = "No puede dejar el campo en blanco";

    }else if(!preg_match("/^[_.0-9a-zA-Z-ñÑ]+@([0-9a-zA-Z][0-9a-zA-Z-ñÑ]+.)+[a-zA-Z]{2,6}$/i", $email)) {

        $emailErr = "The email address is incorrect";  

    } else {

        $email = mb_strtolower($email); 
        
        
            
    }

    if (empty($_POST["login"])) {
        $usuarioErr = "No puede dejar el campo en blanco";
        
    }

    if (empty($_POST["password"])) {

        $claveErr = "No puede dejar el campo en blanco";
    }
}

?>

<?php

$hide=" ";

if(isset($_POST['submit'])) {

if($nombreErr == "" && $primer_apellidoErr == "" && $segundo_apellidoErr == "" && $emailErr == "" && $usuarioErr == "" && $claveErr == "") 
{   
        $sql = "INSERT INTO datos_registro (NOMBRE, APELLIDO1, APELLIDO2, EMAIL, USUARIO, CLAVE) 
        VALUES ('$nombre', '$primer_apellido', '$segundo_apellido', '$email', '$usuario', '$clave')";

            try{ 
            
                if (mysqli_query( $conn, $sql) === TRUE){

                    echo '<script language="javascript">alert("USUARIO REGISTRADO");</script>';
                    $hide="hide";
                    
                      

                } else {

                    echo "Error: " . $sql . "<br>" . $conn->error;}  

                }

            catch(mysqli_sql_exception) {

                echo '<script language="javascript">alert("EL EMAIL YA HA SIDO UTILIZADO");</script>';}
                
 
     
} else {
    
    echo '<script language="javascript">alert("Revisa los datos");</script>';
    
} 


} 

mysqli_close ($conn)

?>


