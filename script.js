//Ejercicio letras repetidas
//Monstrar por consola cuantas veces aparece cada letra de tu nombre, con distintas variables (fases)

//FASE 1
//a)Crear un array con tu nombre donde cada posición responda a una letra
const name=["A", "N", "D", "R", "E", "S"];
//b)haz un bucle que recorra este array y muestre por consola cada una de las letras.

// for (var i=0; i<name.length; i++){
//   console.log(name[i]);
// }

//FASE 2
//a)Al bucle, si la letra es vocal, imprime en la consola: "He encontrado la vocal:__", sino "He encontrado la consonante:__";
for (var i=0; i<name.length; i++){
   var char=name[i];
   if(char === "A"||char === "E"||char === "I"||char === "O"||char === "U"){
    console.log("He encontrado la VOCAL: "+name[i]+".");
  }else
   console.log("He encontrado la CONSONANTE: "+name[i]+".");
}
