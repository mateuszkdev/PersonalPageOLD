import { Request, Response, NextFunction } from 'express'
import { endPointInterface } from '../types/endpointInterface'
import { Application } from 'express'
import { readdirSync } from 'fs'

export default class EndpointsHandler {

    app: Application

    constructor(app: Application) {

        this.app = app

        console.log(`[Info]: Loading endpoints.`)
        console.log(`[=========================]`)

        readdirSync(`${__dirname}/../endpoints`)
            .filter((f: string) => f.endsWith('.js'))
                .forEach((endpointName: string) => {

                    const endPoint: endPointInterface = require(`${__dirname}/../endpoints/${endpointName}`)._

                    if (!endPoint.method || !endPoint.url || !endPoint.execute) return

                    if (typeof endPoint.url === 'string') return this.set(endPoint.url, endPoint.execute, endpointName, endPoint.method)
                    else if (Array.isArray(endPoint.url)) return endPoint.url.forEach((one: string) => {
                        this.set(one, endPoint.execute, endpointName, endPoint.method)
                    })

        })

        console.log(`[=========================]`)
        console.log(`[Info]: Endpoints loaded!`)

    }

    private set(url: string, execute: endPointInterface['execute'], name: string, method: endPointInterface['method']) {

        switch (method) {

            case 'GET':
                this.app.get(url, (req: Request, res: Response, next: NextFunction) => execute(req, res, next))
                break;
            
            case 'POST':
                this.app.post(url, (req: Request, res: Response, next: NextFunction) => execute(req, res, next))

            default: throw new Error(`[EndpointsHandler]: Invalid endpoint method: ${method}: file: ${name}`)
        }

        console.log(`[Success]: Loaded endpoint "${url}" | method: "${method}" from [${name}]`)

    }

}