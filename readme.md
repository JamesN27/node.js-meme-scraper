# Meme Scraper

##

TODOs:

- [x] Command line cheatsheet steps (setup for Node.js project)

- [x] Set up a .gitignore with the memes folder

- [x] Create a folder called "memes"

- [x] Access the website (send a request to the website / "fetching")

- [x] Search for the section in the string of HTML that comes back in the
      "response" from the website
- [x] Search for the first 10 image sources in the section

- [x] Two options
- [ ] One option: .jpg - this is in the HTML code of the website
- [x] Another option: <img

- [x] Get the src URL strings from the img

- [x] Add the first 10 image URL strings to an array

- [x] Loop over the first 10 image URLs and:
- [x] Create a file (named correctly) in the memes folder (eg. 01.jpg, 02.jpg, etc)
- [x] Access the image URL

- [x] In this file, store the image data that comes back (in the "response") from the website

- [x] Test to make sure the program can run multiple times without failing

for (let i = 0; i < filteredUrls.length; i++) {
try {
const response2 = await fetch(filteredUrls[i]);
const buffer = await response2.buffer();
const fileName = `${folderName}/${i < 9 ? '0' : ''}${i + 1}.jpg`;
fs.writeFileSync(fileName, buffer);
} catch (err) {
console.log(`Error occurred while fetching image ${i}: ${err}`);
}
}
