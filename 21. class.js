//  class

class Animal{
    constructor(Name, age){
        this.Name = Name
        this.age = age
    }
    eat(){
        console.log(`${this.Name} is eating...`)
    }
}

//  inheritance
class Cat extends Animal{
    constructor(Name, age, speed){
        //  super constructor
        super(Name, age)
        this.speed = speed
    }
    run(){
        console.log(`${this.Name} is running at ${this.speed} speed.`)
    }
    
}

pet = new Cat("ketti", 1, 20)
pet.eat()
pet.run()