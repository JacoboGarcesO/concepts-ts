"use strict";

(() => {
    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola mundo';

    const obtenersalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Nyaaaa');
        });
    }

    obtenersalario().then(a => console.log(a.toUpperCase))

})();