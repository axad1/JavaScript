
console.log("start")

// function loginUser(user, callback){
//     setTimeout(() => {
//         callback(user.toUpperCase())
//     }, 1000);
// }

// function getVideos(user, callback){
//     setTimeout(()=>{
//         callback(['video1', 'video2'])
//     }, 500)
// }

// loginUser("Asad", user=>{
//     console.log("Welcome", user)
//     getVideos((user), videos=> console.log(videos))
// })


// promise
function loginUser(user){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(user.toUpperCase())
        }, 1000);
    })
}

function getVideos(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(['video1', 'video2'])
        }, 500)
    })
}

loginUser("Asad")
.then(res => console.log(res))
.then(() => getVideos())
.then(res => console.log(res))

console.log("end")