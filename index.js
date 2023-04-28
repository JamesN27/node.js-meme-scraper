import fs from 'node:fs';
import fetch from 'node-fetch';

function extractUrls(str, lower = false) {
  const regexp =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi;

  if (typeof str !== 'string') {
    throw new TypeError(
      `The str argument should be a string, got ${typeof str}`,
    );
  }

  if (str) {
    const urls = str.match(regexp);
    if (urls) {
      return lower ? urls.map((item) => item.toLowerCase()) : urls;
    } else {
      undefined;
    }
  } else {
    undefined;
  }
}

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

// filter URLs so we only get the first 10 that are definitely images (containing the word images but not containing memecomplete)
const filteredUrls = urls
  .filter((url) => !url.includes('memecomplete') && url.includes('images'))
  .slice(0, 10);

// loop to save the images to the target folder and naming them correctly.
for (let i = 0; i < filteredUrls.length; i++) {
  const response2 = await fetch(filteredUrls[i]);
  const buffer = await response2.buffer();
  const fileName = `${folderName}/${i < 9 ? '0' : ''}${i + 1}.jpg`;
  fs.writeFileSync(fileName, buffer);
}
