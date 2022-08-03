import colors from '@colors/colors'
import cheerio from 'cheerio'
import params from './tools'
import lunchBrInstance from './utils/browser'
import saveContentIntoFile from './utils/file'

const loadHTML = async (html = '<div><div>') => {
    const $ = cheerio.load(html)
    return $?.html()
}

const main = async () => {
    for (const website of params.websites) {
        const cookiesArr = []
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const results = await lunchBrInstance(website.url)
        if ('html' in results) {
            const html = await loadHTML(results.html)
            if (params.fileOptions.htmlFile) saveContentIntoFile('html', website.name, 'html', html)
            if (params.fileOptions.jsonFile) {
                if (results.cookies?.length > 0) {
                    results.cookies?.map((cookie) => cookiesArr.push(cookie))
                    saveContentIntoFile('json', website.name, 'json', cookiesArr)
                } else {
                    console.log('no cookies found'.bgRed)
                }
            }
        } else console.warn('request failed: '.bgRed, results.url)
    }
}

main()
