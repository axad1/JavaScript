//  bind is used to pass context + and returns a binded function to that
function about(str){
    console.log(`Hello ${this.firstname}.`, str)
}

user1 = {
    firstname: "Asad"
}
user2 = {
    firstname: "Ali Ahmad"
}

func = about.bind(user2, "welcome")
func()