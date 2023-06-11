"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var direccion1 = new direccion_1.direccion('Calle Mayor', 34, 1, 'C', 'Madrid', 'Madrid', 42354);
var correo1 = new mail_1.mail('personal', 'pedro_garcia@gmail.com');
var telefono1 = new telefono_1.telefono('movil personal', 654987321);
var persona1 = new Persona_1.Persona('Pedro', 'García', 42, '32453685F', "1979-05-12", 'verde', 'hombre', [direccion1], [correo1], [telefono1], 'No llamar a partir de las 17:00');
var direccion2 = new direccion_1.direccion('Calle Menor', 23, 3, 'A', 'Valencia', 'Valencia', 75548);
var correo2 = new mail_1.mail('trabajo', 'margar@gmail.com');
var telefono2 = new telefono_1.telefono('movil trabajo', 666947321);
var persona2 = new Persona_1.Persona('Marta', 'García', 35, '35457854F', "1983-04-15", 'rojo', 'mujer', [direccion2], [correo2], [telefono2], 'Solo contactar por llamada si es una urgencia');
var direccion3 = new direccion_1.direccion('Rua Alcornoque', 2, 5, 'C ', 'A Coruña', 'A Coruña', 38555);
var correo3 = new mail_1.mail('personal', 'helenaillo@gmail.com');
var telefono3 = new telefono_1.telefono('casa', 986554774);
var persona3 = new Persona_1.Persona('Helena', 'Tomillo', 26, '55478548F', "1997-02-10", 'violeta', 'mujer', [direccion3], [correo3], [telefono3], '');
//Mostrar en la terminal en este caso a la Persona 1
console.log('Datos: ', persona1.nombre, ' ', persona1.apellido);
console.log(' Edad: ', persona1.edad);
console.log(' DNI: ', persona1.DNI);
console.log(' Cumpleaños: ', persona1.cumpleaños);
console.log(' Color Favorito: ', persona1.colorFavorito);
console.log(' Sexo: ', persona1.sexo);
console.log(direccion1);
console.log(correo1);
console.log(telefono1);
console.log('Notas:', persona1.notas);
//creamos un espacio para que los datos no se mezclen:
console.log('   ');
console.log('   ');
var dnibuscar = '32453685F';
var nuevadireccion = new direccion_1.direccion('Calle Pequeña', 14, 1, 'C', 'A Coruña', 'A Coruña', 42386);
var nuevomail = new mail_1.mail('trabajo', 'pedroworks@email.com');
var nuevotelefono = new telefono_1.telefono('movil trabajo ', 68574844);
if (dnibuscar == persona1.DNI) {
    console.log(persona1.nombre, 'ha cambiado su direccion');
    console.log('Nueva direccion: ', nuevadireccion);
    console.log(persona1.nombre, 'ha cambiado su telefono');
    console.log('Nuevo telefono: ', nuevotelefono);
    console.log(persona1.nombre, 'ha cambiado su email');
    console.log('Nuevo email: ', nuevomail);
}
else if (dnibuscar == persona2.DNI) {
    console.log(persona2.nombre, 'ha cambiado su direccion');
    console.log('Nueva direccion: ', nuevadireccion);
    console.log(persona2.nombre, 'ha cambiado su telefono');
    console.log('Nuevo telefono: ', nuevotelefono);
    console.log(persona2.nombre, 'ha cambiado su email');
    console.log('Nuevo email: ', nuevomail);
}
else if (dnibuscar == persona3.DNI) {
    console.log(persona3.nombre, 'ha cambiado su direccion');
    console.log('Nueva direccion: ', nuevadireccion);
    console.log(persona3.nombre, 'ha cambiado su telefono');
    console.log('Nuevo telefono: ', nuevotelefono);
    console.log(persona3.nombre, 'ha cambiado su email');
    console.log('Nuevo email: ', nuevomail);
}
