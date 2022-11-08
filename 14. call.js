//  call is used to pass context
function about(str){
    console.log(`Hello ${this.firstname}.`, str)
}

user1 = {
    firstname: "Asad"
}
user2 = {
    firstname: "Ali Ahmad"
}

about.call(user2, "Welcome")