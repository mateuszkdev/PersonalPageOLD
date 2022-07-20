import { endPointInterface } from '../types/endpointInterface'
const { socialmedia } = require('../../../settings/media.json')
const { projects } = require('../../../settings/projects.json')
const lang = require('../../../settings/lang.json')

export const _: endPointInterface = {

    method: 'GET',
    url: ['/', '/home', '/index'],

    execute: async (req, res) => {
        
        const language = lang.pl
        res.render('home', { socialmedia, language, projects })

    }

}