//  new keyword automatically make __proto__ chaining
//  1. create empty object this {}
//  2. return this
//  3. make __proto__ chain (no need to use Object.create(object))

function CreateUser(Name, age){
    this.Name = Name
    this.age = age
}

CreateUser.prototype.about = function(){
    console.log(`hi i am ${this.Name}, and i am ${this.age}`)
}

user1 = new CreateUser("asad", 5)

console.log(user1)
user1.about()

//  hasOwnProperty
for(key in user1)
    if(user1.hasOwnProperty(key))
        console.log(key)