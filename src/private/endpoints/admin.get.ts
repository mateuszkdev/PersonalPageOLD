import { endPointInterface } from '../types/endpointInterface'

export const _: endPointInterface = {

    method: 'GET',
    url: ['/admin', '/login', '/adminpanel'],

    execute: async (req: any, res, next) => {

        if (!req.session.user) return res.render('adminLogin', { err: '' })
        else return console.log('ok')
        
    }

}