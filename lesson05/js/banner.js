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
    document.getElementsByClassName("bannerad").classList[0].toggle("showbanner");
}

else {
 
    document.getElementsByClassName("bannerad").classList[0].toggle("hidebanner");
 }

 
//looked at list of DOM Tokens like toggle. add was the only one that fit.
//document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();