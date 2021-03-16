import path from 'path'
import { promises as fsp } from 'fs'
import { defaultsDeep } from 'lodash'

import { base, ts, vue } from '../src/config'

function obj2JSModule(obj: any) {
    return 'module.exports = ' + JSON.stringify(obj, null, 4)
}

export default function() {
    const cwd = process.cwd()
    const dist = path.join(cwd, 'dist')
    return Promise.all([
        { name: 'base', obj: base },
        { name: 'ts', obj: defaultsDeep({}, base, ts) },
        { name: 'vue', obj: defaultsDeep({}, base, vue) },
        { name: 'full', obj: defaultsDeep({}, base, ts, vue) },
    ].map(pair => fsp.writeFile(
            path.join(dist, pair.name, 'index.js'),
            obj2JSModule(pair.obj)
    )))
}