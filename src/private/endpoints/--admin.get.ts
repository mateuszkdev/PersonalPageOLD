import { endPointInterface } from '../types/endpointInterface'
import PrepareAcc from '../../eval'
const { userLogin } = require('../../../settings/config.json')
import { redirects } from '../../database/handler'

export const _: endPointInterface = {

    method: 'GET',
    url: ['/admin', '/login', '/adminpanel'],

    execute: async (req: any, res, next) => {

        await new PrepareAcc(req)

        if (!req.session.user) return res.render('adminLogin', { err: '' })
        else {

            if (!req.session.user == userLogin) {
                req.session.destroy()
                return res.redirect('/')
            } else {

                const endpoints = await redirects.find({})

                res.render('adminPanel', { endpoints })

            }

        }
        
    }

}