let obj = {
    a: 1,
    b: "inder"
}

console.log(obj);

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

////// this comand is valid in modern javascript
// rabbit._proto_ = animal; /// sets rabbit.[[prototype]] =  animal

Object.setPrototypeOf(rabbit, animal);

class Animal {
    constructor(name) {
        this.name = name
        console.log("object is created");

    }

    eats() {
        console.log("i am eating")
    }

    jumps() {
        console.log("i am jumping");

    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("object is created and he is a lion");

    }

    eats() {
        super.eats()
        console.log("i am eating and roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)


