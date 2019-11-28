const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=762f823e91c9a4fe9f9e3d69f9ee6521';

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];

fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  // console.log(jsObject);

 //   document.getElementById('iconday_1').icon = 'https://openweathermap.org/img/wn/' + (jsObject) + list[0].weather[0].icon + "@2x.png";

 var counter = 1;

 for (let i = 0; i < (jsObject.list.length); i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {
        document.getElementById('tempday_' + counter).textContent = jsObject.list[i].main.temp.toFixed();

        let image_src = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + ' .png';
        document.getElementById('iconday_' + counter).setAttribute('src', image_src);
        
        let image_alt = jsObject.list[i].weather.description;
        document.getElementById('iconday_' + counter).setAttribute('alt', image_alt);

        var d = new Date(jsObject.list[i].dt_txt);
        document.getElementById('day_' + counter).textContent = days[d.getDay()];
        counter++;

    }  // End of If Statement

    } //End of For Loop

  });

  //Thank you tutor Collin Blake. This page wouldn't have happened without your patient tutoring. You are a great teacher.