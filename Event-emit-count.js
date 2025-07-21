
import EventEmmiter from 'events'


const emmiter =  new EventEmmiter()


const EventCount = {
    "user" : 0,
    "user-login" : 0,
    "user-pur" : 0
}

emmiter.on('user',(user) => {
    console.log(`First Function emit count ..${user}`)
    EventCount["user"]++
})

emmiter.on('user-login' ,(user_log) =>{
        console.log(user_log);
    EventCount["user-login"]++
})

emmiter.on('user-pur',(user,pur) => {
    console.log(`user : ${user} pur : ${pur}`);
      
    EventCount["user-pur"]++
})

emmiter.on('summary',() => {
    console.log(EventCount);
})

emmiter.emit('user',"Amit")
emmiter.emit('user-login',true)
emmiter.emit('user-pur',"Amit","Laptop")

emmiter.emit('summary')