"use strict";

(() => {
    const retirarDinero = (montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }

    retirarDinero(500)
        .then((res => console.log(`Me quedan ${res.toPrecision}`)))
        .catch(console.warn);
})();