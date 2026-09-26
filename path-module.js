const path = require('path')

console.log(path.sep)

const filePath = path.join('/test', '/subfolder', 'text.txt')

console.log(filePath)

const absolutePath = path.resolve(__dirname, 'test', 'subfolder', 'text.txt')

console.log(absolutePath)
