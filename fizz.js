// Recorrer una numeracion y descubrir si un numero es divicible entre 3 mostrar "Fizz",
// Si es divicible entre 5 mostrar "Buzz",
// Si es divicible entre 3 y entre 5 mostrar "FizzBuzz",
let veces = 100;

for (let i = 0; i < veces; i++) {
console.log(i);
   if ( i %3 == 0 ) {
     console.log("fizz");
   }

    if (i %5 == 0) {
    console.log("Buzz");
 }

   if (i %5 == 0 && i %3 == 0) {
     console.log("FizzBuzz");
  }
}