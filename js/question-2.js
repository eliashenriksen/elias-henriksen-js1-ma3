// Javascript 1 - Module Assignment 3

// Question 2


const mainTargeter = document.querySelector(".regularMain");

const apiKEY = "dd2ebe45b11f403886c17941386938be";

const apiURL = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKEY}`;

async function getRawgAPI(inputURL) {

    try {
        const firstRequest = await fetch(inputURL);
        const responseData = await firstRequest.json();
        const workableData = responseData.results;
        mainTargeter.innerHTML = "";

        for (let i = 0; i < workableData.length; i++) {
            if (i === 8) {
                break;
            }
            mainTargeter.innerHTML += `
            <div class="gameDiv">
                <p>Name:</p> ${workableData[i].name} 
                <p>Rating:</p> ${workableData[i].rating} 
                <p>Tags:</p> ${workableData[i].tags.length}
            </div>
            `;
        }

    } catch (error) {
        mainTargeter.innerHTML = `
        <div class="errorMessage1">
            <h2>
                An error has occured when connecting to the database, please try again or contact support!
            </h2>
        </div>
        `;
    }
 
};

getRawgAPI(apiURL);