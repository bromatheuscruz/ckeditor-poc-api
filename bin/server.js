const app = require('../src/app')

const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log('server is running')
})