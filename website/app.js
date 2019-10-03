// Personal API Key for OpenWeatherMap API
const appID = '1a09117c381d7902dc386c387ce1ec07';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', calculateResults);

/* Function called by event listener */
function calculateResults(event) {
    const zipCode = document.getElementById('zip').value;
    console.log(zipCode);
    getWeatherData(baseURL, zipCode);
};

/* Function to GET Web API Data */
const getWeatherData = async (baseURL, zipCode) => {
    const response  = await fetch(baseURL + zipCode + '&appid=' + appID);
    try {
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log('error', error);
    };
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log('error', error);
    };
}

/* Function to GET Project Data */
const retrieveData = async(url='') => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
    } catch(error) {
        console.log('error', error);
    };
};


/*
- I'm calling the weather data properly
- Need to think about integration with the other calls to server/client within the app
- Looking at #4 on Development Strategy list
*/