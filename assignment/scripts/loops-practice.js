console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i = 0; i<6; i++){
  console.log(i);
} // have to change the i is true and will run 5 times while i is less thsn 6
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++){
  console.log(i);
} // have to change the i to 3, and the i is going run from 3 times from 3 to 5.
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let even = 2; even <= 10; even ++){
  console.log(even++);
} // have to change the i variable and change it to the i is going to run until it runs all even numbers from 2 to 10.
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>0; i--){
  console.log(i--);

} // changed i variable to 5 and rule to i for 5 times until 0.

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for (let star of stars ){
  console.log(star);
}

// 3. While loops  
console.log('---- 3. While loop ----');
let index = 0;
const max = 10;
// while loop
// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
while(index < max){
  console.log( 'in while loop.index:' , index);
  index++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let i=0
while(i<6){
  console.log(i);
  i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
(function (){
let i=10
while (i>= 5){
  console.log(i);
  i--;
}
})();

