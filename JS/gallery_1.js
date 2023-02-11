function openLightbox_1() { 
  document.getElementById('mouseTarget').style.position = 'fixed';
  document.getElementById('mouseTarget').style.height = '3.5rem';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '100001';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_1').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  document.getElementById('menu-toggle').style.display = 'none';
  x.removeListener(scale);
var dots = window.matchMedia( "(min-width: 350px)" );
if (dots.matches) {
  document.getElementById('dots1').style.display = 'grid';
}
else {
  document.getElementById('dots1').style.display = 'none';}};


function closeLightbox_1() {
  x.addListener(scale);
  document.getElementById('mouseTarget').style.position = '';
  document.getElementById('mouseTarget').style.height = '';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_1').style.display = 'none'; 
  document.getElementById('rowid').style.display = 'grid';
  document.getElementById('menu-toggle').style.display = 'flex';
  document.getElementsByTagName("Footer")[0].style.display = "flex";
var mq = window.matchMedia( "(max-width: 950px)" );
if (mq.matches) {
  document.getElementById('menu-toggle').style.display = 'flex';
}
else {
  document.getElementById('menu-toggle').style.display = 'none';}};



function openLightbox_2() { 
  document.getElementById('mouseTarget').style.position = 'fixed';
  document.getElementById('mouseTarget').style.height = '3.5rem';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '100001';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_2').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  document.getElementById('menu-toggle').style.display = 'none';
  x.removeListener(scale);
var dots = window.matchMedia( "(min-width: 350px)" );
if (dots.matches) {
  document.getElementById('dots2').style.display = 'grid';
}
else {
  document.getElementById('dots2').style.display = 'none';}};


function closeLightbox_2() {
  x.addListener(scale);
  document.getElementById('mouseTarget').style.position = '';
  document.getElementById('mouseTarget').style.height = '';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_2').style.display = 'none'; 
  document.getElementById('rowid').style.display = 'grid';
  document.getElementById('menu-toggle').style.display = 'flex';
  document.getElementsByTagName("Footer")[0].style.display = "flex";
var mq = window.matchMedia( "(max-width: 950px)" );
if (mq.matches) {
  document.getElementById('menu-toggle').style.display = 'flex';
}
else {
  document.getElementById('menu-toggle').style.display = 'none';}};


function openLightbox_3() { 
  document.getElementById('mouseTarget').style.position = 'fixed';
  document.getElementById('mouseTarget').style.height = '3.5rem';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '100001';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_3').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  document.getElementById('menu-toggle').style.display = 'none';
  x.removeListener(scale);
var dots = window.matchMedia( "(min-width: 350px)" );
if (dots.matches) {
  document.getElementById('dots3').style.display = 'grid';
}
else {
  document.getElementById('dots3').style.display = 'none';}};


function closeLightbox_3() {
  x.addListener(scale);
  document.getElementById('mouseTarget').style.position = '';
  document.getElementById('mouseTarget').style.height = '';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_3').style.display = 'none'; 
  document.getElementById('rowid').style.display = 'grid';
  document.getElementById('menu-toggle').style.display = 'flex';
  document.getElementsByTagName("Footer")[0].style.display = "flex";
var mq = window.matchMedia( "(max-width: 950px)" );
if (mq.matches) {
  document.getElementById('menu-toggle').style.display = 'flex';
}
else {
  document.getElementById('menu-toggle').style.display = 'none';}};





function changeSlide(a) {
  showSlide1(slideIndex += a);
};

function changeSlide(b) {
  showSlide2(slideIndex += b);
};

function toSlide1(a) {
  showSlide1(slideIndex = a);
};

function toSlide2(b) {
  showSlide2(slideIndex = b);
};

function toSlide3(c) {
  showSlide3(slideIndex = b);
};


function showSlide1(a) {
  const slides1 = document.getElementsByClassName('slide1');
  let modalPreviews = document.getElementsByClassName('modal-preview');
  const dot = document.getElementsByClassName('dots1');
  let dots = document.getElementsByClassName('dot1');
  
  if (a > 1) {
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';};
  if (a > slides1.length-1) {
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';};
  if (a > slides1.length) {
    slideIndex = 1;	
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';}
  if (a < 1) {
    slideIndex = slides1.length;
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
    dots[i].style.background = "black";
    dots[i].style.opacity = "1";
    dots[i].style.display = 'grid';};
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    dot[i].className = dot[i].className.replace(' active', '');};
  const dotzz = document.getElementsByClassName('dots');
  let y = dotzz.length;
  slides1[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].style.background = "rgb(219, 10, 10)";
  dots[slideIndex - 1].style.opacity = ".7";
  };

function showSlide2(b) {
  const slides2 = document.getElementsByClassName('slide2');
  let modalPreviews = document.getElementsByClassName('modal-preview');
  const dot = document.getElementsByClassName('dots2');
  let dots = document.getElementsByClassName('dot2');
  
  if (b > 1) {
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';};
  if (b > slides2.length-1) {
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';};
  if (b > slides2.length) {
    slideIndex = 1;	
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';}
  if (b < 1) {
    slideIndex = slides2.length;
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
  for (let j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
    dots[j].style.background = "black";
    dots[j].style.opacity = "1";
    dots[j].style.display = 'grid';};
  
  for (let j = 0; j < modalPreviews.length; j++) {
    modalPreviews[j].className = modalPreviews[j].className.replace(' active', '');
    dot2[i].className = dot[j].className.replace(' active', '');};
  const dotzz = document.getElementsByClassName('dots');
  let y = dotzz.length;
  slides2[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].style.background = "rgb(219, 10, 10)";
  dots[slideIndex - 1].style.opacity = ".7";
  };


function showSlide3(c) {
  const slides3 = document.getElementsByClassName('slide3');
  let modalPreviews = document.getElementsByClassName('modal-preview');
  const dot = document.getElementsByClassName('dots3');
  let dots = document.getElementsByClassName('dot3');
  
  if (c > 1) {
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';};
  if (c > slides3.length-1) {
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';};
  if (c > slides3.length) {
    slideIndex = 1;	
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';}
  if (c < 1) {
    slideIndex = slides3.length;
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
  for (let i = 0; i < slides1.length; i++) {
    slides3[i].style.display = "none";
    dots[i].style.background = "black";
    dots[i].style.opacity = "1";
    dots[i].style.display = 'grid';};
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    dot[i].className = dot[i].className.replace(' active', '');};
  const dotzz = document.getElementsByClassName('dots3');
  let y = dotzz.length;
  slides3[slideIndex - 1].style.display = 'flex';
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
