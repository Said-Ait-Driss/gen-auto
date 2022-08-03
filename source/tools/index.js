export default {
    requestOptions: {
        //* set up your proxy here
        // proxy: {
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
            name: 'walmart',
            url: 'https://www.walmart.com/browse/music/rap-hip-hop-on-cds-vinyl/4104_4117?page=53&affinityOverride=default',
        },
        // {
        //     name: 'proshop',
        //     url:'https://www.proshop.se/'
        // }
    ],
    fileOptions: {
        isNew: false, // true : create a new file and delete old one
        htmlFile: true, // true : get html from targeted url
        jsonFile: true, // true : store cookies in json file
    },
    browserOptions: {
        name: 'chromium', // webkit, chromium, firefox
        headless: false,
        deviceName: 'Desktop Edge', // BlackBerry Z30, Desktop Edge, Galaxy Note 3 ,Nexus 4
    },
}
