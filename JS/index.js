var sizer = window.matchMedia( "(min-width: 950px)" );
var mouseTarget = document.getElementById('mouseTarget');

mouseTarget.addEventListener('mouseenter', function(){ 
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "var(--secondcolor)";
 document.getElementsByClassname("figure.project-index").style.border = "var(--secondcolor)";
}
else {
 document.getElementById("bodyid").style.background = '';
}
}
);

mouseTarget.addEventListener('mouseleave', function(){
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "";
}
else {
 document.getElementById("bodyid").style.background = "";
}
}
);
