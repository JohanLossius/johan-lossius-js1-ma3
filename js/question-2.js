// Question 2
// Make a call to the Rawg API.

// Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for
// the URL and Noroff Assignment for the description.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

// Loop through the results and display the following properties in HTML, but only for the first eight results:

//     name
//     rating
//     number of tags (not the tag details, just the amount of tags)

// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.

const apiKey = `91e14bea09214383a0152ede24c0a948`;
const basicUrl = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE`;
const apiUrl = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`

const htmlCont = document.querySelector(".home");

async function callApiRawg() {
    const response = await fetch(apiUrl);
    const results = await response.json();
    console.log(results);
    let html = "";
    for (let i = 0; i < results.length; i++) {
        html += `<div>${results[i].name}</div><div>${results[i].rating}</div><div>${results[i].length}</div>`;
        if (i === 8) {
            break;
        }
    }
    return html;
};

const finalHtml = callApiRawg();
htmlCont.innerHTML = finalHtml;
console.log(finalHtml);
