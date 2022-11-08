//  chaining
//  __proto__  = [[prototype]]
//  proto is a reference among multiple objects

methods = {
    about(){
        console.log(`Hi i am ${this.Name}.`)
    },
    is18(){
        console.log(`i am 18+ : `, this.age >= 18)
    }
}

function createUser(Name, age){
    //  create proto
    user = Object.create(methods)
    user.Name = Name
    user.age = age
    return user
}

user1 = createUser("asad", 18);

user1.about()
user1.is18()
