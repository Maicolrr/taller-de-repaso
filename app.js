// Crear las siguientes funciones:
// 1. Cree una función que liste todos los nombres con sus respectiva edad.
// 2. Liste solamente los nombres que tengan una edad mayor a 20.
// 3. ¿Cuál es el porcentaje de mujeres que hay en el grupo?
// 4. Agregue una foto a cada personaje, y muestrelos en el navegador
// 5. Cree un nuevo personaje desde el navegador incluyendo imagen.

//solucion:
// import _ from'./people';

const people = [
  { name: 'John', age: 19, gender: "Male" },
  { name: 'Jane', age: 21, gender: "Feminine" },
  { name: 'Joe', age: 22, gender: "Male" },
  { name: 'Jack', age: 23, gender: "Male" },
  { name: 'Jill', age: 14, gender: "Feminine" },
  { name: 'Juan', age: 25, gender: "Male" },
  { name: 'Jenny', age: 26, gender: "Feminine" },    
];

//1)

let names=people.map(function(people){
  return "Name: "+ people.name +" Age: "+ people.age

})

console.log(names);

//2)

let age_over_20 =people.map(function(people){
   if(people.age>20){
    return people.name
  }
})
console.log(age_over_20);

//3)

people_feminine=0;
let feminine =people.map(function(people){
  if(people.gender === Feminine){
    people_feminine+1;
 }
 female_percentage=(people_feminine*100)/people.len
})
console.log(age_over_20);