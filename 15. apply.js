//  apply is used to pass context + arguments in an array
function about(str){
    console.log(`Hello ${this.firstname}.`, str)
}

user1 = {
    firstname: "Asad"
}
user2 = {
    firstname: "Ali Ahmad"
}

about.apply(user2, ["onetwothree"])