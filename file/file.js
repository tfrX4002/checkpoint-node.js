const fs = require('fs')

fs.writeFile('welcome.txt', 'Hello Node', () => {
    console.log('file created')
})

fs.readFile('welcome.txt', (error, data) => {
    if(error){
        return console.log(error)
    }
    console.log(data.toString())
})