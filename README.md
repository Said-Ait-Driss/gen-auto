# Script to generate and collect stored cookies and client stuff in particular websites

## features
 - collect cookies
 - get stored data on local storage

## configuration
 ### configure request option
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
            name: 'walmart',
            url: 'https://www.walmart.com/browse/music/rap-hip-hop-on-cds-vinyl/4104_4117?page=53&affinityOverride=default',
        },
        // {
        //     name: 'proshop',
        //     url:'https://www.proshop.se/'
        // }
    ],
```

### exported files options
    + export json ,html files

```js
    fileOptions: {
            isNew: false, // true : create a new files and delete old ones
            htmlFile: true, // true : store html into html file
            jsonFile: true, // true : store cookies in json file
    }

```