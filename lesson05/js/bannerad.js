//var options = {
//    weekday: 'long', 
//    day: 'numeric', 
//    month: 'long', 
//    year: 'numeric',
//}

//document.getElementById('currentDate').innerHTML = new Date().toLocaleDateString('en-gb', options);

var d = new Date();
var currentDay = d.getDay();

if (currentDay == 3) {
    document.getElementsByClassName("bannerad").classList.add("showbanner");
}

else {
 
    document.getElementsByClassName("bannerad").classList.add("hidebanner");
 }

 
//looked at list of DOM Tokens like toggle. Add was the only one that fit.
//document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();