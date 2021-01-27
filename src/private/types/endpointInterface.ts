import { Request, Response, NextFunction } from 'express'

export interface executeTypes {
    req: Request
    res: Response
    next?: NextFunction
}

export interface endPointInterface {

    method: 'GET' | 'POST'
    url: string | string[]
    execute: (req: Request, res: Response, next?: NextFunction) => Promise<any>

}