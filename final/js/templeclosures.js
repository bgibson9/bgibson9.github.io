const requestURL = 'https://bgibson9.github.io/final/json/temples.json';

fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     console.table(jsonObject);  // temporary checking for valid response and data parsing

    const temples = jsonObject['temples'];

    for (let i = 0; i < temples.length; i++) {

    if(temples[i].name == 'Brigham City Temple')
        {

      //let creates variables in this html tag document. card is a variable. the document is the web page we are referencing here in this case, the weather page index.html where we have referenced this js file. We are creating an element called section or span, name, p, etc.

        //let section = document.createElement("section");
        let span = document.createElement('span');
        let h3 = document.createElement('h3');
        let templeClosures = document.createElement('p');
        //let image = document.createElement('img');

        
      //here we are calling out what we created in let, similiar to the idea of calling by id or class.  textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements. 

      h3.textContent = temples[i].name + ' Closure dates: ';

      for (let j=0; j < temples[i].templeClosures.length; j++)

        {

            let p = document.createElement('p');
            p.textContent = temples[i].templeClosures[j];
            templeClosures.appendChild(p);

        }

        
        span.appendChild(h3);
        span.appendChild(templeClosures);
        //article.appendChild(image);

        //image.setAttribute('src', 'images/');
        //image.setAttribute('alt', temples[i].name + 'photo');
        
       // document.querySelector('span.temples').appendChild(p);
        document.querySelector('span.temples').appendChild(span);
    }
  }
});