function Person(first, last, eye, name){
this.firstname = first;
this.lastname  = last;
this.eyecolor = eye;
this.namefull = name; 
this.nationality = "indian";
this.fullname = function(){
    return this.lastname + " " + this.firstname
}
}
const father = new Person("john","hi",90,"oi","FAIR");
const mother = new Person("mary","oi")
Person.prototype.color = function(value){
    if(value === undefined){
     return this._color;
    }
    this._color = value;
}
father.color("fair")
mother.color("red")
mother.changename = function(name){
    this.lastname  = name;
}
mother.changename("else")
father.race = "asian";

console.log(mother.fullname())
console.log(father.fullname())
console.log("cskin: ",father.color())
console.log(mother.color())
console.log("race : " ,father.race)
console.log(father.eyecolor)
console.log(mother.lastname)
console.log(father.nationality)
console.log(mother.nationality)