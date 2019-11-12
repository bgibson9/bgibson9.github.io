// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading
//var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope but while var variables are initialized with undefined , let and const variables are not initialized
//get all imgs with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
    
};

//optional parameters being set for the intersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};


// first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
       });
    });


// loop through each img and check status and load if necessary
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    }

    else { // just load ALL images if not supported
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
    }