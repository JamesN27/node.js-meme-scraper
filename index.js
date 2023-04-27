import extractUrls from 'extract-urls';
import fs from 'fs';
import fetch from 'node-fetch';

const folderName = 'memes';
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

const response = await fetch('https://memegen-link-examples-upleveled.netlify.app/');
const body = await response.text();

const urls = extractUrls(body);

const filteredUrls = urls.filter(url => url.includes('width')).slice(0,10);


for (let i = 1; i < filteredUrls.length; i++) {
    const response2 = await fetch(urls[i]);
    const buffer = await response2.buffer();
    const fileName = `${folderName}/0${i}.jpg`;
    fs.writeFileSync(fileName, buffer);
  }
  










// console.log(filteredUrls);











