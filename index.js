import extractUrls from 'extract-urls';
import fetch from 'node-fetch';

const response = await fetch('https://memegen-link-examples-upleveled.netlify.app/');
const body = await response.text();

const urls = extractUrls(body);

const filteredUrls = urls.filter(url => url.includes('width')).slice(0,10);










console.log(filteredUrls);











