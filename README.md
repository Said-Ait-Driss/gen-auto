# Script to generate and collect stored cookies and client stuff from particular websites urls

## features
 - collect cookies
 - get local storage values
 - get html

## customizing
 ### customizing request option
    you can customizing request option by setting the following options below :
        - add your own proxy
        - add header request(userAgent ,Content-Type ,...) 

```javascript
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
```

### crawling websites
    - each website defined by an object contains website url, website name 

```ruby
    websites: [
        {
            name: 'example',
            url: 'https://www.example.com',
        },
    ],
```

### exported files options
    + cookies, local storage data , html

```js
    fileOptions: {
        isNew: true, // true : add new file and delete old one
        htmlFile: true, // true : store html
        cookiesFile: true, // true : collect cookies
        localStorageFile: true, // true : collect local Storage
    },
```

### browser options
    + customazing browser instance 
        - run test on chromium ,webkit ,firefox
        - run browser on headless mode
        - run cross platform browser ( ther's a more than 100 device you can check https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json )
``` ruby
        browserOptions: {
        name: 'chromium', // webkit, chromium, firefox
        headless: false,
        deviceName: 'Desktop Edge', // BlackBerry Z30, Desktop Edge, Galaxy Note 3 ,Nexus 4
    }

```

### list of some devices 
   ------------------------
   | Desktop Edge         
   ------------------------
   | BlackBerry Z30       
   ------------------------
   | Desktop Edge         
   ------------------------
   | Nexus 4              
   ------------------------
   | Desktop Chrome       
   ------------------------
   | Desktop Chrome HiDPI 
   ------------------------
   | Desktop Edge         
   ------------------------
   | Desktop Firefox      
   ------------------------
   | Galaxy Note           
   ------------------------
   | Galaxy S II          
   ------------------------
   | Galaxy S9+           
   ------------------------
   | and more ...
