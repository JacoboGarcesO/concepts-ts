"use strict";

(() => {

    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;
    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas:number) {
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //         this.puedePelear = puedePelear;
    //         this.peleasGanadas = peleasGanadas;
    //     }
    // }

    class Avenger {
        constructor(
            public nombre: string,
            public equipo: string,
            public nombreReal?: string,
            public puedePelear: boolean = true,
            public peleasGanadas: number = 0
        ) {

        }
    }

    const antman: Avenger = new Avenger('AntMan', 'Inronman');
    console.log(antman);

})();