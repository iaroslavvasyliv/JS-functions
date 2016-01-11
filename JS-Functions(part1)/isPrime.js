"use strict";

function isPrime(n) {
   if (n < 2) {return false}
   var isPrime = true;

   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }
  
   console.log(isPrime);

}
isPrime();