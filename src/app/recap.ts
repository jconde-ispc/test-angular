const username:string = "Julian"
const sum = (a:number, b:number) =>{
  return a + b;
}

console.log(sum(1,2));//console.log(sum(1,"pedro"));

class Persona{
  private age: number;
  apellido: string;

  constructor(p_age:number, p_apellido:string){
    this.age = p_age;
    this.apellido = p_apellido;
  }
}

const julian = new Persona(30,"Conde");
console.log(julian.age);
console.log(julian.apellido);

