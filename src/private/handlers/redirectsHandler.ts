import app from '../../app'
import { Request, Response, Application } from 'express'
import { redirects } from '../../database/handler'
import { redirectsInterface } from '../types/redirects'

const Redirects = require('../../../settings/redirects.json')

export default class RedirectsHandler {

    server: Application

    constructor (server: Application) {
        this.server = server
        this.run()
    }

    async run () {

        const endpoints: Array<redirectsInterface> | any = await redirects.find({})

        Redirects.forEach((redirect: redirectsInterface) => {
            endpoints.push(redirect)
        })

        endpoints.forEach( async (endpoint: redirectsInterface) => {

            if (app.endpoints.includes(endpoint.name)) return

            this.server.get(endpoint.name, (req: Request, res: Response) => {
                res.redirect(endpoint.redirect)
            })

            app.endpoints.push(endpoint.name)
            console.log(`[Info]: RedirectsHandler: added "${endpoint.name}" to redirect: ${endpoint.redirect}`)

        })

    }

}