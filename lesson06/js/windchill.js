
var tempF = parseFloat(document.getElementsByClassName("temp")[0].textContent);
var speed = parseFloat(document.getElementsByClassName("windSpeed")[0].textContent);
var f = calcWindChill(tempF, speed);
	 document.getElementsByClassName("wChill")[0].textContent = f;

function calcWindChill(tempF, speed) {
	var t = tempF;
    var s = speed;
    //return statement if not within bounds (above 50 and wind speed below 3) no windchill, at or below 50 and windspeed above 3.0 mph wind chill calculates 
    if (t >=50 || s <= 3) { 
        return "N/A";

    }
    
    //else calculate and return
	else {
        var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s,0.16));
        return f.toFixed();
    }
}

//Line 11 could have if (t <=50 && s >=3) depending on how I wrote it  + - / * %remainder; exponentiation ** Increment ++ Decrement -- Logical operators && (both true) OR || not! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators