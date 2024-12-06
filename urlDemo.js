import url from "url";

let urlString = "https://www.google.com/search?q=django";

const urlObj = new URL(urlString);

console.log(url.format(urlObj))
console.log(import.meta.url)

const params = new URLSearchParams(urlObj.search)


console.log(params.get('q'))