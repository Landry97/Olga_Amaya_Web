var meinIntervall = setInterval(function() { 
    document.getElementById("headline").innerHTML = "let's get in contact!";
    update(); 
}, 10000); 
var meinIntervall2 = setInterval(function() {
    document.getElementById("headline").innerHTML = "International Costume Designer and Fashion Stylist based in Barcelona.";
    update(); 
}, 15000); 

var meinIntervall3 = setInterval(function() {
    clearInterval(meinIntervall);
    clearInterval(meinIntervall2);
    clearInterval(meinIntervall3);
    update(); 
}, 25000); 


// Intervall beenden 
// clearInterval(meinIntervall);
