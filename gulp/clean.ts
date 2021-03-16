import { promises as fsp } from 'fs'
import path from 'path'

export default async function() {
    const distPath = path.join(process.cwd(), 'dist')
    try {
        const files = await fsp.readdir(distPath)
        await Promise.all(files.map(file => {
            fsp.rm(path.join(distPath, file), { recursive: true })
        }))
    } catch (err) {
        console.warn('[warn] Failed to clean dist directory.')
    }
}
