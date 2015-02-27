import makeServer from './server'

const server = makeServer()

const port = 3002

server.listen(port, () => {
    console.log(`server started on port ${port}`)
})