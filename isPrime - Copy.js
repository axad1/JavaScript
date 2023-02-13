'use strict';

//START:ISPRIME
const isPrime = function(number) {
  for(let i = 2; i < number; i++) {
    if(number % i === 0) return false;
  }
  
  return number > 1;
};
//END:ISPRIME

//START:PRIMES
const primesStartingFrom = function*(start) {
  let index = start;
  
  while(true) {
    if(isPrime(index)) yield index;
    index++;
  }
};
//END:PRIMES
            
//START:USE
for(const number of primesStartingFrom(10)) {
  process.stdout.write(number + ', ');
  if(number > 25) break;
}
//END:USE