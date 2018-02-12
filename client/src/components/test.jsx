class Dog {
    constructor(breed, color, size = 'normal') {

        this.state = {
            breed,
            color,
            size
        }
    }
}

let margaux = new Dog ('Red Border Collie', 'white and tan');

console.log(margaux.state)