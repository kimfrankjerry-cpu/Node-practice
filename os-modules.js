// // Modules

// const names = require('./names')

// const sayHi = require('./function')

// const data = require('./alternative')

// // console.log(names)
// // console.log(data)

// // sayHi(names.john)
// // sayHi(names.susan)


// require('./mindgrenade')

const os = require('os')

// info about current user
const user = os.userInfo()

console.log(user)

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)