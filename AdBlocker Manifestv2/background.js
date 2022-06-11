const {readFileSync, promises: fsPromises} = require('fs');

//array of blackListed websites
// const blackListed = [
// 	"*://*.doubleclick.net/*",
// 	"*://partner.googleadservices.com/*",
// 	"*://*.googlesyndication.com/*",
// 	"*://*.google-analytics.com/*",
// 	"*://creative.ak.fbcdn.net/*",
// 	"*://*.adbrite.com/*",
// 	"*://*.exponential.com/*",
// 	"*://*.quantserve.com/*",
// 	"*://*.scorecardresearch.com/*",
// 	"*://*.zedo.com/*",
// ]
const blackListed = readFileSync("output.txt", 'utf-8').split(", ");

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    { urls: blackListed },
    ["blocking"]
    );