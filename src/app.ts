import { Application } from 'express'
import server from './server'
import EndpointsHandler from './private/handlers/endpointsHandler'
import RedirectsHandler from './private/handlers/redirectsHandler'
import { connection, redirects } from './database/handler'

export class App {

    server!: Application
    endpoints: string[]

    constructor () {
        connection()

        this.endpoints = []
        this.start()
    }

    async start () {

        // test
        const test = new redirects({
            name: '/test', redirect: 'https://google.pl'
        }); await test.save()

        this.server = await server
        await new EndpointsHandler(this.server)
        await new RedirectsHandler(this.server)

    }

}

const app = new App()
export default app