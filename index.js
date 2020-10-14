const fetch = require('node-fetch');
const cheerio = require('cheerio');
 
const URL = 'https://www.imdb.com/title/tt0102926/?ref_=nv_sr_1';
 
fetch(URL, {
  headers: {
    'Host': 'www.imdb.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'fr-CA,en-US;q=0.7,en;q=0.3',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'dnt': '1'//my browser header
  }, 
  gzip: true
})
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    let title =$('div[class="title_wrapper"] > h1').text();
    let rating = $('div[class="ratingValue"] > strong > span').text();
    console.log(title, rating);
});