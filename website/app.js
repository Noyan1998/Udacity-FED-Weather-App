// Personal API Key for OpenWeatherMap API
const openWeatherKey = '1a09117c381d7902dc386c387ce1ec07';
const baseURL = 'api.openweathermap.org/data/2.5/weather?';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data */

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
