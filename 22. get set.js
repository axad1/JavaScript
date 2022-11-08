class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    //  static method cannot be called by object
    static classinfo(){
        console.log("this is Person class")
    }

    //  getter
    get fullname(){
        return this.firstName+ " " + this.lastName
    }
    //  setter
    set fullname(fullname){
        //  destructuring array
        let [firstName, lastName] = fullname.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }
}

user = new Person("asad", "hussain")
user.fullname = "ali ahmad"

//  static method (call with class name)
Person.classinfo()