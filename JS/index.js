var sizer = window.matchMedia( "(min-width: 950px)" );
var mouseTarget = document.getElementById('mouseTarget');

const collection = document.getElementsByClassName("figure.project-index");

mouseTarget.addEventListener('mouseenter', function(){ 
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "var(--secondcolor)";
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.borderColor = "pink";
}
}
else {
 document.getElementById("bodyid").style.background = '';
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.borderColor = "pink";
}
}
}
);

mouseTarget.addEventListener('mouseleave', function(){
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "";
  for (let i = 0; i < collection.length; i++) {
  collection[i].style.borderColor = "pink";
}
}
else {
 document.getElementById("bodyid").style.background = "";
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.borderColor = "pink";
}
}
}
);
