
function getDate() {
var d = new Date();
var dayName = daynames [d.getDay()];
var monthName = months[d.getMonth()];
var fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

}
document.getElementById('currentdate').textContent = fulldate(document.currentDate).fulldate();

document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();