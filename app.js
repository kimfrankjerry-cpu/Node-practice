const { readFile, writeFile } = require('fs')

readFile('./test/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./test/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./test/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err) => {
                if (err)
                    console.log(err)
                return
            })
    })
})