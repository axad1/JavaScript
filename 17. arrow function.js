//  arrow function does not allow to change this
//  it takes this from surrounding
//  it takes this from one level up

user = {
    id: 1,
    Name: "asad",
    about: ()=> console.log(this)
}
user.about()

//  it is also supported to not given key to function 
user = {
    id: 1,
    Name: "asad",
    about(){
        console.log(this)
    }
}
user.about()