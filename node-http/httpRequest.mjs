// loading ESM modules: node --experimental-modules my-app.mjs
import * as https from 'https';
import * as http from 'http';

import * as querystring from 'querystring';

// const postData = querystring.stringify({
//   'msg': 'Hello World!'
// });
const postData = JSON.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Length': Buffer.byteLength(postData)
  },
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();