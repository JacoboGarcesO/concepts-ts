"use strict";

(function () {
    function getEdad(edad: number): number {
        return edad + 100;
    }

    const nombre = 'Jacobo';
    const apellido = 'Garcér';
    const edad = 1;

    const salida = `${nombre} ${apellido} Edad: ( ${getEdad(edad)} )`;

    console.log(salida);

})();