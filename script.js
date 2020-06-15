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
// for (var i=0; i<name.length; i++){
//    var char=name[i];
//    if(char === "A"||char === "E"||char === "I"||char === "O"||char === "U"){
//     console.log("He encontrado la VOCAL: "+name[i]+".");
//   }else
//    console.log("He encontrado la CONSONANTE: "+name[i]+".");
// }


//b)Si encuentras un número, muestra por pantala "Los nombres de personas no contienen el número:__"

// for (var i=0; i<name.length; i++){
//     var char=parseInt(name[i]);
//
//       if (!Number.isNaN(char)) {
//           console.log("Los nombres de personas no contienen el número: "+name[i]+".");
//       }else if(name[i] === "A"||name[i] === "E"||name[i] === "I"||name[i] === "O"||name[i] === "U"){
//           console.log("He encontrado la VOCAL: "+name[i]+".");
//       }else
//         console.log("He encontrado la CONSONANTE: "+name[i]+".");
// }


//FASE 3
//Almacenar en un Map tanto las letras de la lista (o array) como el número de veces que aparecen
var letter_count={};
var newarray= name.map(letter => {
  if (letter_count[letter] === undefined) {
    letter_count[letter] = 1;
  } else {
    letter_count[letter]++;
  }
});
console.log(letter_count);

//FASE 4

//Crea otra lista con tu apellido donde cada posición corresponda a una letra.

//Combinar las dos listas en una sola. Además, añade una posición con un espacio vacío entre la primera y la segunda. Es decir, partimos de la lista name y surname y al terminar la ejecución sólo tendremos una que se llamará fullname.
const surname=["G", "A", "R", "C", "I", "A"];

const fullname= name.concat(surname);
console.log(fullname);

fullname.splice (6,0," ");
console.log(fullname);
