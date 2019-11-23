const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=762f823e91c9a4fe9f9e3d69f9ee6521';

fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 //   document.getElementById('iconday_1').icon = 'https://openweathermap.org/img/wn/' + (jsObject) + list[0].weather[0].icon + "@2x.png";

    for (let i = 0; i < (jsObject.list.length); i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00'[, position])); {
        document.getElementById('tempday_1').textContent = jsObject.main.temp_max;
        
        let img = document.createElement("img");
        let image_src = "http://openweathermap.org/img/wn/" + weather_icon + "@2x.png";
        img.setAttribute("src", image_src);
        let image_alt = forecast_data[i].weather[0].description;
        img.setAttribute("alt", image_alt);
      }

    }

  });

//  

//  
// <p>Image Icon Path Test: <span id="imagesrc"></span> &nbsp; <img src="icon" alt="icon" id="icon"></p>

//list.main.temp_max
//list.dt
//list.dt_txt includes '18:00:00'

//my html ids on table cells
//day of week in table "day_1"
//weather icon "iconday_1"
//temp "tempday_1"

// Function takes in a Date object and returns the day of the week in a text format.

//function getWeekDay(date) {
  //Create an array containing each day, starting with Sunday.
//  var weekdays = new Array(
//    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//  );
  //Use the getDay() method to get the day.
//  var day = date.getDay();
  //Return the element that corresponds to that index.
//  return weekdays[day];
// });
