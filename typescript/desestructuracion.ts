"use strict";

(() => {
    const aveger = {
        nombre: 'Steve',
        cllave: 'Capitán América',
        poder: 'Droga'
    }

    const extraer = ({ nombre, poder }: any) => {
        console.log(nombre, poder);

    }

    // extraer(aveger);

    const aveenvers: string[] = ['Thor, Ironman, Spiderman'];

    const [, , spiderman] = aveenvers;

    // console.log(Thor, inroman, spiderman);
    console.log(spiderman);

    const extraerArr = ([thor, inronam, spiderman]:string[]) => {
     console.log(thor, inronam, spiderman);

    }
    
    extraerArr(aveenvers);

})();