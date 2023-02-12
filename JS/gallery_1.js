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
};

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
};




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
};

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
};





function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  const slides1 = document.getElementsByClassName('slide1');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
  
  if (n > 1) {
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  };
  
  if (n > slides1.length-1) {
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
 
  if (n > slides1.length) {
    slideIndex = 1;	
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  };
  
  if (n < 1) {
    slideIndex = slides1.length;
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
  

  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  const dotzz = document.getElementsByClassName('dots');
  let y = dotzz.length;
  slides1[slideIndex - 1].style.display = 'flex';
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
