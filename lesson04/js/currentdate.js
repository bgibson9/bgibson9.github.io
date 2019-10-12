var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}

var d = new Date();
var dayName = daynames [d.getDay()];
var monthName = months[d.getMonth()];
var fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById('currentDate').innerHTML = new Date().toLocaleDateString('en-US', options);

document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();