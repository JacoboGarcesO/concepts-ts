(() => {

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  let edad = 23;

  const PERSONAJE = {
    nombre,
    edad
  };

  console.log(PERSONAJE);


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Heroe {
    nombre: string,
    artesMarciales: string[]
  }

  const batman: Heroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
  }

  console.log(batman);


  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = (a: number, b: number): number => (a + b) * 2;

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger(nombre: string, poder?: string, arma: string = 'Arco'): string {
    let mensaje;
    if (poder) {
      mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    } else {
      mensaje = `${nombre} + ' tiene un ' + ${arma}`;
    }
    return mensaje;
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  interface RectaguloInterface {
    base: number,
    altura: number
  }

  class Rectagulo implements RectaguloInterface {
    constructor(
      public base: number,
      public altura: number
    ) { }

    public calcularArea = (): number => {
      console.log('Vamos a calcular el área del rectangulo.');
      return this.altura * this.base;
    }
  }

  const rectangulo: Rectagulo = new Rectagulo(2, 5);
  console.log(rectangulo.calcularArea())
  console.log(getAvenger('Jacobo', 'Ser lindo', 'La belleza'));
  console.log(resultadoDoble(2, 1));


})();