//  only functions provide prototype property so we can add our properties
//  prototype is a free space that is provided by a function
//  prototype is a simple object

function createUser(Name, age){
    //  create proto with prototype space
    user = Object.create(createUser.prototype)
    user.Name = Name
    user.age = age
    return user
}

createUser.prototype.about = function(){
    console.log(`Hi i am ${this.Name}.`)
}
createUser.prototype.is18 = function(){
    console.log(`i am 18+ : `, this.age >= 18)
}

user1 = createUser("asad", 18);

user1.about()
user1.is18()

console.log(Object.getPrototypeOf(user1))

//  to get array prototype
console.log(Array.prototype)