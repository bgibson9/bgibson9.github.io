
var tempF = parseFloat(document.getElementsByClassName('temp')[0].textContent);
var speed = parseFloat(document.getElementsByClassName('windSpeed')[0].textContent);
var f = calcWindChill(tempF, speed);
	 document.getElementsByClassName('wChill')[0].textContent = calcWindChill;


function calcWindChill(tempF, speed) {
	var t = tempF;
	var s = speed;
	var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s,0.16));
        return f;
    if t <=50 and s > 3 {
        document.getElementsByClassName('wChill')[0].textContent = calcWindChill;
    }
//Do I need an else?
//How do I account for tempF <= 50 and 	windSpeed > 3	
}

         
