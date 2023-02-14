function scale(x) {
  if (x.matches) { // If media query matches
    document.getElementById('menu-toggle').style.display = 'flex';
  } else {
    document.getElementById('menu-toggle').style.display = 'none';
  }}
var x = window.matchMedia("(max-width: 950px)")
scale(x) // Call listener function at run time
x.addListener(scale) // Attach listener function on state changes 


var menuclose = document.getElementById('#menupointid.show');
scale(menuclose) // Call listener function at run time
menuclose.addListener(scale) // Attach listener function on state changes 

const menu = document.getElementById('menu-toggle');
const menupoint = document.getElementById('menupointid');
const navUL = document.getElementById('nav-ul');
const navMenu = document.getElementById('navMenu');
const address = document.getElementById('address');
const body = document.getElementById('bodyid');

menu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      navUL.classList.toggle('show');
      address.classList.toggle('show');
      body.classList.toggle('show');
      menu.classList.toggle('show');
      menupoint.classList.toggle('show');
      headerindex.style.color = "black";
}); 

menuclose.addEventListener('click', () => {
      headerindex.style.color = "white";
}); 



//TO TOP BUTTON
mybutton = document.getElementById("myBtn");
// [When the user scrolls down 20px from the top of the document, show the button]
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
     if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
       mybutton.style.display = "flex";} 
       else {
       mybutton.style.display = "none";}
   };
// [When the user clicks on the button, scroll to the top of the document]
function topFunction() {
 document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
