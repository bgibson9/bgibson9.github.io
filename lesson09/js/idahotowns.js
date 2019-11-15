const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {

        let card = document.createElement("section");
        let h2 = document.createElement("name");
        let motto = document.createElement("p");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement ("p");
        let photo = document.createElement("img");
        
        h2.textContent = towns[1].name;
        h2.textContent = towns[5].name;
        h2.textContent = towns[6].name;
        motto.textContent = towns.[1, 5, 6].motto;
        motto.textContent = towns.[5].p;
        motto.textContent = towns.[6].p;
        yearFounded.textContent = 'Year Founded' + ' ' + 'towns.[1, 5, 6].yearFounded;
        yearFounded.textContent = towns.[1, 5, 6].yearFounded;
        yearFounded.textContent = towns.[1, 5, 6].yearFounded;
        currentPopulation.textContent = towns.[1, 5, 6].currentPopulation;
        averageRainfall.textContent = towns.[1, 5, 6].averageRainfall;

//        birthplace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;

        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(photo);
        
        photo.setAttribute('src', towns[1, 5, 6].photo); 
       photo.setAttribute('alt',towns[1,5,6].name);

        document.querySelector('span.towns').appendChild(card);

  }
});