const person = {
    "name": "Pooja",
    "age": 22,
    "active": true,
    "skills": ["HTML", "CSS"],
    "address": null
}

console.log(typeof person);

const jsondata = JSON.stringify(person);
console.log(typeof jsondata);
console.log(jsondata);  

console.log(jsondata.name);

const x= JSON.parse(jsondata);
console.log(typeof x);

console.log(x);
console.log(x.name); 