var d = new Date();
var dayName = daynames [d.getDay()];
var monthName = months[d.getMonth()];
var fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById('currentDate').textContent = fulldate;

document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();