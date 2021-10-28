// 'use strict';


let anyNumber = +prompt('Enter number from 0 to 9', 4);

let bag = [
   'zero',
   'one',
   'two',
   'three',
   'four',
   'five',
   'six',
   'seven',
   'eight',
   'nine',
];

function transform(number) {
   if (+number < 0 || +number >= 10 || number === null) {
      alert('This is not the number I asked for');
   }
   else if (+number >= 0 || +number <= 10) {
      alert(bag[+number]);
   } else {
      alert('This is not the number I asked for');
   }
}

transform(anyNumber);

