// function count(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let increment = count();


// for(let i = 1; i < 4; i++){
// increment();
// }

// function test() {
//     let x = 10;
//     return x;
// }

// let tes = test();
// console.log(tes);
// console.log(test());

// function bankact(){
//     let balance = 1500;

//     return {
//         deposit(amount){
//             balance += amount;
//         },
//         withdraw(amount){
            
//             balance -= amount >= 0 ? balance -= amount : "sufficent balance not found";
//         },
//         getBalance() {
//             return balance;
//         }
//     }

// }

// let amount = bankact();
// amount.deposit(500);
// amount.withdraw(200);
// console.log(amount.getBalance());
// amount.withdraw(1000);
// amount.withdraw(1000);
// console.log(amount.getBalance());

// function clicks(){
//     let click = 0;

//     document.getElementById("btn")
//     .addEventListener("click", function (){
//         click++;
//         console.log(click);

//     });
// }

// clicks();

//  function a(x, y){
//      function b(z){
//             console.log(x + z + y);
//         }
//  b(5)
//      }
// let out = a(2,3);

const person= {
    name : 'poo',
    age: 23,
    stream: 'engineer'
}
const {age, stream} = person;
console.log(person);
console.log(age);
console.log(stream);
console.log(name);