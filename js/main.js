'use strict'

{
  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const source = [];
  for (let i = 0; i <15; i++){
    source[i] = i + 1;
  }

  // Math.floor(Math.random()* (14 + 1))
  // Math.floor(Math.random()* (source.length))
  const b = [];
  // b[0] = source.splice(Math.floor(Math.random()* source.length),1)[0];
  // b[1] = source.splice(Math.floor(Math.random()* source.length),1)[0];
  // b[2] = source.splice(Math.floor(Math.random()* source.length),1)[0];
  // b[3] = source.splice(Math.floor(Math.random()* source.length),1)[0];
  // b[4] = source.splice(Math.floor(Math.random()* source.length),1)[0];
  for (let i = 0; i < 5; i++){
    b[i] = source.splice(Math.floor(Math.random()* source.length),1)[0];
  }

  console.log(b);
}