const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.05&lon=-111.46&units=imperial&appid=762f823e91c9a4fe9f9e3d69f9ee6521';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementsByClassName('currently')[0].textContent = jsObject.weather[0].description;
    document.getElementsByClassName('high-temp')[0].textContent = jsObject.main.temp_max;
    document.getElementsByClassName('windSpeed')[0].textContent = jsObject.wind.speed;
    document.getElementsByClassName('humidity')[0].textContent = jsObject.main.humidity;

    runWC();

  });

function runWC() {
  var tempF = parseFloat(document.getElementsByClassName("high-temp")[0].textContent);
  var speed = parseFloat(document.getElementsByClassName("windSpeed")[0].textContent);

 // console.log(tempF)
 // console.log(speed)

  var f = calcWindChill(tempF, speed);
  document.getElementsByClassName("wChill")[0].textContent = f;
}

function calcWindChill(tempF, speed) {
  var t = tempF;
  var s = speed;

 // console.log(t)
 // console.log(s)

  //return statement if not within bounds (above 50 and wind speed below 3) no windchill, at or below 50 and windspeed above 3.0 mph wind chill calculates 
  if (t >= 50 || s <= 3) {
    return "N/A";

  }

  //else calculate and return
  else {
    var f = (35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));
    return f.toFixed();
  }
}

//Line 11 could have if (t <=50 && s >=3) depending on how I wrote it  + - / * %remainder; exponentiation ** Increment ++ Decrement -- Logical operators && (both true) OR || not! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators








//Notes Week 10
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