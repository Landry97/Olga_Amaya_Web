let slideIndex = 1;
function openLightbox() { 
  document.getElementById('mouseTarget').style.position = 'fixed';
  document.getElementById('mouseTarget').style.height = '3.5rem';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '100001';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  document.getElementById('menu-toggle').style.display = 'none';
  x.removeListener(scale);
var dots = window.matchMedia( "(min-width: 350px)" );
if (dots.matches) {
  document.getElementById('dots').style.display = 'grid';
}
else {
  document.getElementById('dots').style.display = 'none';
}
};
function closeLightbox() {
  x.addListener(scale);
  document.getElementById('mouseTarget').style.position = '';
  document.getElementById('mouseTarget').style.height = '';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox').style.display = 'none'; 
  document.getElementById('rowid').style.display = 'flex';
  document.getElementById('menu-toggle').style.display = 'flex';
  document.getElementsByTagName("Footer")[0].style.display = "flex";
var mq = window.matchMedia( "(max-width: 950px)" );
if (mq.matches) {
  document.getElementById('menu-toggle').style.display = 'flex';
}
else {
  document.getElementById('menu-toggle').style.display = 'none';
}
};
function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');
  const dot = document.getElementsByClassName('dots');
  let dots = document.getElementsByClassName('dot');


  
  
  if (n > 1) {
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  };
  
  if (n > slides.length-1) {
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
 
  if (n > slides.length) {
    slideIndex = 1;	
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
  

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.background = "black";
    dots[i].style.opacity = "1";
    dots[i].style.display = 'grid';
  };
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    dot[i].className = dot[i].className.replace(' active', '');
  };
  const dotzz = document.getElementsByClassName('dots');
  let y = dotzz.length;
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].style.background = "rgb(219, 10, 10)";
  dots[slideIndex - 1].style.opacity = ".7";
  };
  overlayShown = false,
  overlayScrollListener = null,
  overlaySavedScrollTop = 0,
  overlaySavedScrollLeft = 0;

function showOverlay() {
  overlayShown = true;

  // Show overlay
  overlay.addClass("overlay-shown");

  // Save scroll position
  overlaySavedScrollTop = body.scrollTop();
  overlaySavedScrollLeft = body.scrollLeft();

  // Listen for scroll event
  overlayScrollListener = body.scroll(function() {
    // Scroll back to saved position
    body.scrollTop(overlaySavedScrollTop);
    body.scrollLeft(overlaySavedScrollLeft);
  })
};
var boxid = "Lightbox";
window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide(-1);}  
if (event.keyCode == 39) {
    changeSlide(1);}
};
