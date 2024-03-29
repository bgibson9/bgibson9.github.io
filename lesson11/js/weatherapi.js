//   use weather vs forecast, convert kelvin to fahrenheit (this is done in the url)
//   The city ID variable at OpenWeatherMap for Preston Idaho is 5604473. How do you find this?
//   762f823e91c9a4fe9f9e3d69f9ee6521 
//   Use weather versus forecast data.      The querystring name/value pair settings in the URL should be:
//   a city id for Preston, Idaho, temperature units in Fahrenheit (imperial), and your own APPID.  
//   The current temperature is found under "main" and is named "temp". In your "weatherapi.js" file, write the temperature value to the HTML document using id value of the <span> tag with the id of 'current-temp'.  This line of code should immediately follow the console.log() statement.  
//The current weather icon is found under the "weather" array, at index of [0] and is named "icon". This icon is just a preset code value that corresponds to OpenWeatherMap's library of images which is found at https://openweathermap.org/img/w/ (Links to an external site.)

//Use a variable to store the image address which needs to be concatenated together given the API icon code value result.
//Use a variable to store the weather description.
//Assign the <span> tag  with the id of 'imagesrc' the concatenated image variable to to display the full address for testing purposes.
//Set the src attribute for the <img> with the id of 'icon'.
//Set the alt attribute for the <img> for accessibility.

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=762f823e91c9a4fe9f9e3d69f9ee6521';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 
 document.getElementById('current-temp').textContent = jsObject.main.temp; 

 const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';   //lesson note:  note the concatenation
 const desc = jsObject.weather[0].description;
 const icon = document.createElement('img'); //this is how we reference the weather array

   document.getElementById('imagesrc').textContent = imagesrc; // what does this mean - informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc); // note:  focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);

});