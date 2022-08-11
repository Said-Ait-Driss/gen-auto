import playwright, { devices } from 'playwright'
import params from '../tools'

const lunchBrInstance = async (url) => {
    let browser,
        browserOptions = getBrowserOptions(),
        browserContextOptions = getBrowserContextOptions()

    browser = await playwright[params.browserOptions.name].launch(browserOptions)

    const context = await browser.newContext(browserContextOptions)
    const page = await context.newPage({
        userAgent: params.browserOptions.headers?.userAgent
            ? params.browserOptions.headers.userAgent
            : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    })
    await page.goto(url)
    await page.waitForSelector('body')
    let html = await page.$('html')
    const cookies = await context.cookies()
    const localStorage = await page.evaluate(() => JSON.stringify(window.localStorage))
    html = await html.innerHTML()
    await context.close()
    await browser.close()
    return {
        html,
        cookies,
        localStorage,
    }
}

const getBrowserOptions = () => {
    let browserOptions
    if ('proxy' in params.requestOptions) {
        browserOptions = {
            headless: params.browserOptions.headless,
            proxy: params.requestOptions.proxy,
        }
    } else {
        browserOptions = {
            headless: params.browserOptions.headless,
        }
    }
    return browserOptions
}

const getBrowserContextOptions = () => {
    let device = params.browserOptions.deviceName
        ? devices[params.browserOptions.deviceName]
        : devices['iPhone 13 Pro Max']
    return {
        ...device,
    }
}

export default lunchBrInstance
