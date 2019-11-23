const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=762f823e91c9a4fe9f9e3d69f9ee6521';

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];

fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 //   document.getElementById('iconday_1').icon = 'https://openweathermap.org/img/wn/' + (jsObject) + list[0].weather[0].icon + "@2x.png";

 var counter = 1;

 for (let i = 0; i < (jsObject.list.length); i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {
        document.getElementById('tempday_' + counter).textContent = jsObject.list[i].main.temp.toFixed();

        let image_src = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x.png';

        document.getElementById('iconday_' + counter).setAttribute('src', image_src);
        
        let image_alt = jsObject.list[i].weather.description;
        
        document.getElementById('iconday_' + counter).setAttribute('alt', image_alt);

        var d = new Date(jsObject.list[i].dt_txt);

        document.getElementById('day_' + counter).textContent = days[d.getDay()];

        counter++;

    }  // End of If Statement

    } //End of For Loop

  });


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



//my html ids on table cells
//day of week in table "day_1"
//weather icon "iconday_1"
//temp "tempday_1"