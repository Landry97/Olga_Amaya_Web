var meinIntervall = setInterval(function() { 
    document.getElementById("headline").innerHTML = "let's get in contact!";
    update(); 
}, 13000); 
var meinIntervall2 = setInterval(function() {
    document.getElementById("headline").innerHTML = "International Costume Designer and Fashion Stylist based in Barcelona.";
    update(); 
}, 17000); 

clearInterval(meinIntervall);

// Intervall beenden 
// clearInterval(meinIntervall);
