console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies = []){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);
    }

    removeHobby(hobby){
        this.hobbies = this.hobbies.filter(word => word !== hobby);
    }

    greeting(){
        console.log(`Hello ${this.name}`);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person{
    constructor(name, pets, residence, hobbies = []){
        super(name, pets, residence, hobbies);

        this.occupation = "Full Stack Web Developer";
    }

    greeting(){
        console.log(`Hello ${this.name}, you are a ${this.occupation}`);
    }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const me = new Coder('Alex', 1, '1600 Pennsylvania Ave');
me.addHobby('Biking');
me.addHobby('TV');
me.removeHobby('TV');
console.log(me.hobbies);
me.greeting();

const me2 = new Coder('Cthulhu', 8000000000, '123 Main Street');
me2.addHobby('Devouring Humans');
me2.addHobby('TV');
me2.addHobby('Octopode Things')
me2.removeHobby('TV');
console.log(me2.hobbies);
me2.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{                                                                                                                                                                                                                                                                                           
    constructor(){
       this.result = 0;
    }

    add(a, b){
        if(b) this.result = a + b;
        else this.result = this.result + a;
    }
    subtract(a, b){
        if(b) this.result = a - b;
        else this.result = this.result - a;
    }
    multiply(a, b){
        if(b) this.result = a * b;
        else this.result = this.result * a;
    }
    divide(a, b){
        if(b) this.result = a / b;
        else this.result = this.result / a;
    }

    displayResult(){
        console.log(this.result);
    }

}

let calc = new Calculator();
calc.add(1,2);
calc.displayResult();
