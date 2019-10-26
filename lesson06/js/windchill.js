
var tempF = parseFloat(document.getElementsByClassName("temp")[0].textContent);
var speed = parseFloat(document.getElementsByClassName("windSpeed")[0].textContent);
var f = calcWindChill(tempF, speed);
	 document.getElementsByClassName("wChill")[0].textContent = f;

function calcWindChill(tempF, speed) {
	var t = tempF;
    var s = speed;
    //return statement if not within bounds (above 50 and wind speed above 3) no windchill
    if (t >=50 || s <= 3) { //could have (t <=50 && s >=3) 
        return "N/A";

    }
    
    //else calculate and return
	else {
        var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s,0.16));
        return f.toFixed();
    }
}

