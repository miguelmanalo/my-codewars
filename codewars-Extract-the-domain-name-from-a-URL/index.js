// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

const domainName = (domainStr) => 
{
    // let domainRegex = /(?!w)(?!/http/)(\w+)(?!\.)/g;
    let domainRegex = /(?!http|https|co|www)(?=\w+)/
    let result = domainStr.match(domainRegex);
    console.log(result)
    return result;
}

console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"

// My Notes
// let domainRegex2 = /(http://|https://)(www.)/
// look for multiple strings of lettesr and numbers followed by a dot
// let domainRegex3 = /()/
