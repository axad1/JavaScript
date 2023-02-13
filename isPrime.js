'use strict';
//START:ISPRIME
const isPrime = function(number) {
  for(let i = 2; i < number; i++) {
    if(number % i === 0) return false;
  }
  
  return number > 1;
};
//END:ISPRIME