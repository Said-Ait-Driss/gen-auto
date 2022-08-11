import dirs from './'
import fs from 'fs-extra'
import params from '../tools'
import path from 'path'
import currentDir from '../__dir'

const __dirname = path.dirname(currentDir())

const HTMLsrc = `${path.basename(__dirname)}${dirs.htmlDir}`,
    HTMLdest = `${path.basename(__dirname)}${dirs.htmlDest}`

const COOKIESsrc = `${path.basename(__dirname)}${dirs.cookiesDir}`,
    COOKIESdest = `${path.basename(__dirname)}${dirs.cookiesDest}`

const LOCALSTORAGEsrc = `${path.basename(__dirname)}${dirs.localStorageDir}`,
    LOCALSTORAGEdest = `${path.basename(__dirname)}${dirs.localStorageDest}`

const saveContentIntoFile = async (fileType, name, ext, content) => {
    let { src, dest } = getFileType(fileType)

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
                fs.writeFileSync(src + `${name}.${ext}`, JSON.stringify(content), 'utf8')
            else fs.writeFileSync(src + `${name}.${ext}`, content, 'utf8')
            console.log('write'.green, `${name}.${ext}`.yellow, 'file successully !'.green)
        } else {
            if (typeof content === 'object')
                fs.writeFileSync(src + `${name}.${ext}`, JSON.stringify(content), 'utf8')
            else fs.writeFileSync(src + `${name}.${ext}`, content, 'utf8')
            console.log('write'.green, `${name}.${ext}`.yellow, 'file successully !'.green)
        }
    } catch (err) {
        console.error(err)
    }
}

const getFileType = (fileType) => {
    switch (fileType) {
        case 'cookies':
            return {
                src: COOKIESsrc,
                dest: COOKIESdest,
            }
        case 'localStorage':
            return {
                src: LOCALSTORAGEsrc,
                dest: LOCALSTORAGEdest,
            }
        default:
            return {
                src: HTMLsrc,
                dest: HTMLdest,
            }
    }
}

export default saveContentIntoFile
