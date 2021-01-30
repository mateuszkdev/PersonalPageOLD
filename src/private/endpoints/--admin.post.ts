import { endPointInterface } from '../types/endpointInterface'
import { compare } from 'bcrypt'
const { userLogin } = require('../../../settings/config.json')

import app from '../../app'

export const _: endPointInterface = {

    method: 'POST',
    url: ['/adminlogin'],

    execute: async (req: any, res, next) => {

        res.render('adminLogin')

        if (!app.endpoints.includes('/noinputinlogin')) {
            app.endpoints.push('/noinputinlogin')
            app.server.get('/noinputinlogin', (req, res) => {
                return res.render('adminLogin')
            })
        }

        if (
            !req.body.name ||
            !req.body.pass
        ) return res.redirect('/noinputinlogin')

        const match: boolean = await compare(req.body.pass, '')

        if (!match) return res.redirect('/')

        else {

            let newSession = req.session
            newSession.user = userLogin
            res.redirect('/admin')

        }
        
    }

}