const http = require('http');
const https = require('https');
const urllib = require('url');
let httpMod = null;
/*很简单，不解析*/
var url = 'http://www.baidu.com';
/*通过url模块，解析url地址*/
let urlObj = urllib.parse(url);
if (urlObj.protocol == 'http:') {
    console.log(urlObj)
    httpMod = http;
} else if (urlObj.protocol=='https:') {
    console.log(urlObj)
    httpMod = https;
} else {
    throw new Error(`协议无法识别: ${urlObj.protocol}`);
}