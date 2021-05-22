"use strict";

(function () {
    const miFuncion = function (a: string) {
        return a.toUpperCase;
    }

    const miFuncionFlecha = (a: string) => a.toUpperCase;

    console.log(miFuncion('Normal'));
    console.log(miFuncionFlecha('Flecha'));

    const sumarN = function (a: number, b: number) {
        return a + b;
    }

    const sumarF = (a: number, b: number) => a + b;

    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);

        }
    }
})();