let d = new Date ();
d.getFullYear();

document.getElementById("FullYear").textContent = fullyear;
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric";
}
document.getElementById(
    "currentdate2"
).textContent = new Date().toLocaleDateString(en-US), options;
catch (e){
    alert("Error with code or your browser does not support Locale");
}

/*
<link href=css/date.html