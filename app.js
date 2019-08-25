const siteExceptions = [/facebook/, /twitter/, /linkedin/];

let count = 0;

for (site of siteExceptions) {
    if (site.test(window.location.href)) {
        count++;
    }
}

if (count === 0) {
    document.body.innerHTML = document.body.innerHTML.replace(/Jair Messias Bolsonaro/gi, 'Mijair Messias Borsalino').replace(/Jair Bolsonaro/gi, 'Mijair Borsalino').replace(/Bolsonaro/gi, 'Borsalino');
}

// if (window.location.href.indexOf("twitter") === -1 && window.location.href.indexOf("linkedin.com") === -1 && window.location.href.indexOf("facebook") === -1) {
//     document.body.innerHTML = document.body.innerHTML.replace(/Jair Bolsonaro/gi, 'Mijair Borsalino').replace(/Bolsonaro/gi, 'Borsalino');
// }