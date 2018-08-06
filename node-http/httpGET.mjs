// loading ESM modules: node --experimental-modules my-app.mjs
import * as https from 'https';

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Florence';
// const url = 'https://www.google.com/'

https.get(url, res => {
  res.setEncoding("utf8");
  // console.log(res);
  let body = "";  
  res.on("data", data => {
    console.log('res.on data', data)
    body += data;
  });
  res.on("end", () => {
    console.log('end')
    body = JSON.parse(body);
    console.log(
      `City: ${body.results[0].formatted_address} -`,
      `Latitude: ${body.results[0].geometry.location.lat} -`,
      `Longitude: ${body.results[0].geometry.location.lng}`
    );
  });
});
