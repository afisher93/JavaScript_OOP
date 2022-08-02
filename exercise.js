class person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
addHobby(hobby) {
this.hobbies.push(hobby)
}
removeHobby() {}

let foundIndx = this.hobbies.indexof(hobby)

let valuesBefore = this.hobbies.slice(0, foundIndx)
let valuesAfter = this.hobbies.slice(foundIndx + 1)
this.hobbies.slice()
this.hobbies = valuesBefore.concat(valuesAfter);

greeting() {
    console.log("hello fellow person!");

}

info() {}
}

let person = new person("ben", 0,"birmingham", ["running", "diy", "reading"]);

person.addHobby("fencing");
console.log(person);


class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies)
        this.occupation = occupation;

    }

    greeting() {
        console.log("hello i am a coder!");
    }
}