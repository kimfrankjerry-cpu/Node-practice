const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./test/first.txt', 'utf8')
const second = readFileSync('./test/second.txt', 'utf8')

writeFileSync(
    './test/result.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
) 