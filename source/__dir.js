import { fileURLToPath } from 'url'

const currentDir = () => {
    const __filename = fileURLToPath(import.meta.url)
    return __filename
}

export default currentDir
