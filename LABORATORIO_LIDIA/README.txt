Para este ejercicio se pedia una doble validacion en front y back end, he utililizado varios archivos php para ello, en uno de ellos, INDEX.PHP es en el que se encuentra el HTML incrustado,
y es el que debe ponerse en el host local para poder acceder al formulario.
En VALIDACION.PHP esta la validacion de los campos y demas operaciones (limpieza, etc.) no añadí un hash para las contraseñas para que se pudiese comprar en la consulta que se graban correctamente.
En SUBMIT.PHP se encuentra el enlace con la BBDD.

Todo ello enlazado mediante "include".

La base de datos tiene como llave principal el email, para así evitar que haya registros duplicados y el formulario avisa al usuario en caso de que ese sea el caso.

SOLAMENTE al ingresar todos los datos correctamente y registrar el usuario satisfactoriamente aparece el boton para consultar la BBDD,
enlazado a un último archivo php para hacer esa consulta. (también tiene un boton para poder volver al formulario).

Añado la carpeta con la imagen que use de fondo (es un dibujo que yo hice, por lo que tengo total derecho de uso del mismo).
