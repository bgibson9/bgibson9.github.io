const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {

    if(towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i.name == "Soda Springs"])
        {
        let card = document.createElement("section");
        let h2 = document.createElement("name");
        let motto = document.createElement("p");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement ("p");
        let photo = document.createElement("img");
        
        h2.textContent = towns[i].name;
       
        motto.textContent = towns[i].p;
       
        yearFounded.textContent = 'Year Founded' + ' ' + 'towns[i].yearFounded';
      
        currentPopulation.textContent = towns[i].currentPopulation;
        averageRainfall.textContent = towns[i].averageRainfall;

//        birthplace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;

        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(photo);
        
        photo.setAttribute('src', towns[i].photo); 
        photo.setAttribute('alt', towns[i].name);

        document.querySelector('span.towns').appendChild(card);
    }
  }
});