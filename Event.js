// Events in Node js..

import EventEmmiter from 'events'

const emmiter =  new EventEmmiter()

// emmiter.on define the function like this..
const user = {
    name: "Amit Pal",
    isLogin : false,
    email : "ap06878@gamil.com"
}

emmiter.on('sayHello',(user) =>{
    console.log(`\nSay Hello Friends..\nuser : ${user.name}  Login : ${user.isLogin}  Email : ${user.email}`)
})

// emmiter.emit that call this function and addListen..

emmiter.emit('sayHello',user)