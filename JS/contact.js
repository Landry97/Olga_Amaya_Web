var meinIntervall = setInterval(function() { 
    // alle 3 Sekunden ausführen 
    document.getElementById("headline").innerHTML = "let's get in contact!";
    update(); 
}, 10000); 

// Intervall beenden 
// clearInterval(meinIntervall);
