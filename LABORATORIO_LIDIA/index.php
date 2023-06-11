<?php
include 'validacion.php';
?>

<!DOCTYPE html>
<html lang="español">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear nueva cuenta.</title>
    <link rel="stylesheet" href="styleprueba.css">
    
     
</head>

<body>
    
<div class="datos">
    <form id="form" class="form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" >
        
     

            <h1>Bienvenido!</h1>

            <div class="input-control">
                <label class="formtext" for="nombre">Nombre:</label>
                <br>
                <input type="text" name="nombre" Id="nombre" value="" placeholder="Nombre"  title="No son validos números o símbolos especiales" maxlength="20" REQUIRED>
                <div class="error"><?php echo $nombreErr;?></div>
            </div>
        <br>
            <div class="input-control">
                <label class="formtext" for="apellido1">Primer apellido:</label>
                <br>
                <input type="text" name="apellido1" Id="apellido1" value="" placeholder="Primer apellido"  title="No son validos números o símbolos especiales" maxlength="20" REQUIRED>
                <div class="error"><?php echo $primer_apellidoErr;?></div>
            </div>
        <br>
            <div class="input-control">
                <label class="formtext" for="apellido2">Segundo apellido:</label>
                <br>
                <input type="text" name="apellido2" Id="apellido2" value="" placeholder="Segundo apellido"  title="No son validos números o símbolos especiales" maxlength="20" REQUIRED>
                <div class="error"><?php echo $segundo_apellidoErr;?></div>
            </div>
        <br>         
            <div class="input-control">
                <label class="formtext" for="email">Email:</label>
                <br>
                <input type="email" name="email" Id="email" value="" placeholder="ejemplo@email.es" title="La dirección de correo debe de ser valida" maxlength="50" REQUIRED>
                <div class="error"><?php echo $emailErr;?></div>
            </div>

        <br>
         
        <div class="user">

            <div class="input-control">
                <label class="formtext" for="login">Nombre de usuario:</label>
                <br>
                <input type="text" name="login" Id="login" value="" placeholder="Nombre de usuario"  title="máximo 15 caracteres" maxlength="15" REQUIRED>
                <div class="error"><?php echo $usuarioErr;?></div>
            </div>
            
            <div class="input-control">
                <label class="formtext"for="password">Clave:</label>
                <br>
                <input type="password" name="password" Id="password" placeholder="Contraseña"  title="Entre 4 y 8 carácteres" minlength="4" maxlength="8" REQUIRED >
                <div class="error"><?php echo $claveErr;?></div>
            </div>

        </div>
        
            <button class="inputs" type="submit" name="submit" id="enviar"> ENVIAR </button>
            
            <button class="reset" type="reset" name="reset" id="reset" onclick="location.href='http://localhost/laboratorio/index.php'" > RESETEAR </button>
            
            <button class="<?= $hide ?>" type="button" name="consultar" id="consultar"  onclick="location.href='http://localhost/laboratorio/consulta.php'" hidden> CONSULTAR BASE DE DATOS </button>
    </form>
        
</div>

    
    </body>

</html>
