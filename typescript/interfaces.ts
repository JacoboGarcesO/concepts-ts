"use strict";

(() => {
    interface Xmen {
        nombre: string,
        edad: number,
        poder?: string
    }
    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviado ${xmen.nombre} a la misión`);
    }

    const regresarAlcuartel = (xmen: Xmen) => {
        console.log(`Enviado ${xmen.nombre} al cuartel`);
    }


    const weolvernie: Xmen = {
        nombre: 'Logan',
        edad: 18
    }
    enviarMision(weolvernie);
    regresarAlcuartel(weolvernie);
})();