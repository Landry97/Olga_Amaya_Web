var meinIntervall = setInterval(function() { 
    document.getElementById("headline").innerHTML = "let's get in contact!";
    update(); 
}, 5000); 
var meinIntervall2 = setInterval(function() {
    document.getElementById("headline").innerHTML = "International Costume Designer and Fashion Stylist based in Barcelona.";
    update(); 
}, 9000); 

var meinIntervall3 = setInterval(function() {
    clearInterval(meinIntervall);
    clearInterval(meinIntervall2);
    clearInterval(meinIntervall3);
    update(); 
}, 20005); 


// Intervall beenden 
// clearInterval(meinIntervall);
