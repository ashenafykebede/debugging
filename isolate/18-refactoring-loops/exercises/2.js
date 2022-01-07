// #todo

'use strict';
console.log('-- begin --');

const minutesLeft = 9;

for (let i = minutesLeft; i > 0; i--) {
  const message = `${i} minutes left`;
  console.log(message);
}

// refactor this for loop to a while loop
let j = minutesLeft;
while(true){
  const message = `${j} minutes left`;
  console.log(message);
   j--;
    if(j<1){
     break;
  }
}

console.log('-- end --');
