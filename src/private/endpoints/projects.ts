import { endPointInterface } from '../types/endpointInterface'
const { projects } = require('../../../settings/projects.json')
const lang = require('../../../settings/lang.json')

export const _: endPointInterface = {

    method: 'GET',
    url: ['/projects', '/projekty'],

    execute: async (req, res) => {
        
        res.render('projects', { projects })

    }

}