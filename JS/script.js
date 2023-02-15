function scale(x) {
  if (x.matches) { // If media query matches
    document.getElementById('menu-toggle').style.display = 'flex';
  } else {
    document.getElementById('menu-toggle').style.display = 'none';
  }}
var x = window.matchMedia("(max-width: 950px)")
scale(x) // Call listener function at run time
x.addListener(scale) // Attach listener function on state changes 

const menu = document.getElementById('menu-toggle');
const menu2 = document.getElementById('menu-toggle.menu-toggle.show');

const headerindex = document.getElementById('headerindex');

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
  f_color(); f2_color();
}); 


  function f_color() {
if (document.getElementById('headerindex').style.color = "rgb(" +255+ "," +255+ "," +255+ ")") 
{
    document.getElementById('headerindex').style.color = "rgb(" +0+ "," +0+ "," +0+ ")";
}
};


  function f2_color() {
    
if (document.getElementById('headerindex').style.color = "rgb(" +0+ "," +0+ "," +0+ ")") 
{
    document.getElementById('headerindex').style.color = "rgb(" +255+ "," +255+ "," +255+ ")";
} 
};



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
