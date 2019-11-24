const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

        if (towns[i].name == 'Preston') {

            let section = document.createElement('section');
           // let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let events = document.createElement('p');
            let image = document.createElement('img');
            
            h3.textContent = towns[i].name + ' Upcoming Events: ';

            //let div = document.createElement('div');
            for (let j = 0; j < towns[i].events.length; j++) 
            {
        
            
                let p = document.createElement('p');
                p.textContent = towns[i].events[j];
                events.appendChild(p);

            }
            //events.textContent = towns[i].events;

           // section.appendChild(article);
            section.appendChild(h3);
            section.appendChild(events);
            section.appendChild(image);

            image.setAttribute('src', 'images/michael-heuser-2rvnqI4lUN8-unsplash.jpg');
            image.setAttribute('alt', towns[i].name + ' town event photo');

            document.querySelector('article.events').appendChild(section);

        }
    }
});