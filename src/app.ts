import { Application } from 'express'
import server from './server'
import EndpointsHandler from './private/handlers/endpointsHandler'

export class App {

    server!: Application

    constructor () {
        this.start()
    }

    async start () {

        this.server = await server
        new EndpointsHandler(this.server)

    }

}

const app = new App()
export default app