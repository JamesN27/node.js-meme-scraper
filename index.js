import fs from 'node:fs';

import extractUrls from 'extract-urls';
import fetch from 'node-fetch';

// create folder called memes
const folderName = 'memes';
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

// get HTML from target website
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

// extract URLs from response HTML
const urls = extractUrls(body);

// filter URLs so we only get the first 10 that are definitely images (containing the keyword width)
const filteredUrls = urls.filter((url) => url.includes('width')).slice(0, 10);

// loop to safe the images to the target folder and naming them correctly
for (let i = 1; i <= filteredUrls.length; i++) {
  const response2 = await fetch(urls[i]);
  const buffer = await response2.buffer();
  const fileName = `${folderName}/0${i}.jpg`;
  fs.writeFileSync(fileName, buffer);
}

