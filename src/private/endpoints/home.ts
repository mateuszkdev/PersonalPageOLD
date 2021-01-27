import { endPointInterface } from '../types/endpointInterface'
const { projects } = require('../../../settings/projects.json')

export const _: endPointInterface = {

    method: 'GET',
    url: ['/', '/home', '/index'],

    execute: async (req, res) => {
        
        res.render('home', { projects })

    }

}