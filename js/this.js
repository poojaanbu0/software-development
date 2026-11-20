// // Create person Object
// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   age: 23,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   },
//   age: function(){
//     return this.age + "  years old is " + this.firstName;
//   }
// }

// // Create member Object
// const member = {
//   firstName:"Hee",
//   lastName: "Nilsen",
// }

// const m = {
//  firstName: "pooja",
//  age: 24,
// }

// // Bind the fullName Method to the member Object 
// let fullName = person.fullName.bind(member);

// document.getElementById("demo").innerHTML = fullName();

// let f  = person.age.bind(m);
// document.getElementById("age").innerHTML = f();

const person = {
    name : "john",

    greet(){
        const display = () =>{ 
            console.log(this.name);
        }
        display();
    }
}
person.greet();