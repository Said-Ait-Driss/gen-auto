export default {
    requestOptions: {
        //* set up your proxy here
        // proxy: {
        //     hostname: '',
        //     server: '', // http://myproxy.com:3128
        //     username: '',
        //     password: '',
        // },
        headers: {
            // 'Content-Type': 'application/json',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            userAgent:
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        },
    },
    websites: [
        {
            name: 'example',
            url: 'https://www.example.com/',
        },
    ],
    fileOptions: {
        isNew: true, // true : create a new file and delete old one
        htmlFile: true, // true : store html from targeted url
        cookiesFile: true, // true : store cookies in json file
        localStorageFile: true, // true : store local Storage data into json file
    },
    browserOptions: {
        name: 'firefox', // webkit, chromium, firefox
        headless: false,
        deviceName: 'Desktop Edge', // BlackBerry Z30, Desktop Edge, Galaxy Note 3 ,Nexus 4
    },
}
