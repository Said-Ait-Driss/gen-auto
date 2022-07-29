import dirs from './'
import fs from 'fs-extra'
import params from '../tools'
import path from 'path'
import currentDir from '../__dir'

const __dirname = path.dirname(currentDir())

const HTMLsrc = `${path.basename(__dirname)}${dirs.htmlDir}`,
    HTMLdest = `${path.basename(__dirname)}${dirs.htmlDest}`

const JSONsrc = `${path.basename(__dirname)}${dirs.jsonDir}`,
    JSONdest = `${path.basename(__dirname)}${dirs.jsonDest}`

const saveContentIntoFile = async (fileType, name, ext, content) => {
    let src = HTMLsrc,
        dest = HTMLdest
    if (fileType === 'json') {
        src = JSONsrc
        dest = JSONdest
    }
    try {
        if (params.fileOptions.isNew) {
            if (fs.existsSync(src + `${name}.${ext}`)) {
                await fs.move(
                    src + `${name}.${ext}`,
                    dest + `${new Date().getTime()}-${name}.${ext}`
                )
                console.log('moving'.green, `${name}.${ext}`.yellow, 'file successully !'.green)
            }
            if (typeof content === 'object')
                fs.writeFileSync(src + `${name}.${ext}`, JSON.stringify(content, null, 4), 'utf8')
            else fs.writeFileSync(src + `${name}.${ext}`, content, 'utf8')
            console.log('write'.green, `${name}.${ext}`.yellow, 'file successully !'.green)
        } else {
            if (typeof content === 'object')
                fs.writeFileSync(src + `${name}.${ext}`, JSON.stringify(content, null, 4), 'utf8')
            else fs.writeFileSync(src + `${name}.${ext}`, content, 'utf8')
            console.log('write'.green, `${name}.${ext}`.yellow, 'file successully !'.green)
        }
    } catch (err) {
        console.error(err)
    }
}

export default saveContentIntoFile
