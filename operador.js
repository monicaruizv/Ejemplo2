class  Persona {
    nombre;
    apellido;
    edad;
    getDetalles(){
        return (this.nombre + this.apellido + this.edad);
    }
    constructor(nombre="N",apellido="A",edad=0) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        console.warn(this.nombre + "" + this.apellido + "" + this.edad);
    }
}
class Jugador extends Persona {
    posicion;
    getDetalles(){
        return super.getDetalles () + this.posicion;

    }
    constructor(posicion) {
        super().posicion=posicion ;
    }
}
// const ejemplo = new Persona ("Hector", "Torres",33);
const jugador1 = new Jugador("D");
//  ejemplo.getDetalles();
jugador1.getDetalles();