
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject["prophets"];

    for (let i = 0; i < prophets.length; i++ ) {

        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        //let birthdate = document.createElement("birthdate");
        //let p = document.createElement("birthdate");
        //let birthplace = document.createElement("birthplace");
        //let p = document.createElement("birthplace");
        //let img = document.createElement("img");
        //let order = document.createElement("order");
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        //p.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
       // p2.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;

        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        
        img.setAttribute('src', prophets[i].imageurl);
        img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order);

        document.querySelector('div.cards').appendChild(card);

  }
});