function change_text_headline(){
    document.getElementById("headline").innerHTML = "let's get in contact";
}


var meinIntervall = setInterval(function() { 
    // alle 3 Sekunden ausführen 
    update(); 
    document.getElementById("headline").innerHTML = "let's get in contact";
    document.getElementById("headline").innerHTML = "nice to meet you";
}, 15000); 

// Intervall beenden 
clearInterval(meinIntervall);
