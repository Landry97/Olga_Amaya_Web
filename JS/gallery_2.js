// Declare iterators.
var i, j;

// Go through each row and assign events
var rows = document.getElementsByClassName(".project-list-index");
var images;
for(i = 0; i < rows.length; i++) {
  // Prepare each image in the row
  images = rows[i].getElementsByTagName("picture");
  for(j = 0; j < images.length; j++) {
    // Use the image's position as its slide number and save it in an attribute
    images[j].setAttribute("data-number", j);
    
    // Assign an event listener to the image
    images[j].addEventListener("click", openModal);
  }
}

// Gather all modal boxes and assign events to the buttons inside
var modals = document.querySelector(".modal");
var modal, close, prev, next;
for(i = 0; i < modals.length; i++) {
  modal = modals[i];

  // Close button
  close = modal.querySelector(".close pointer");
  close.addEventListener("click", closeModal);
  
  // Next button
  next = modal.querySelector(".nex");
  next.addEventListener("click", nextSlide);
  
  // Prev button
  prev = modal.querySelector(".prev");
  prev.addEventListener("click", prevSlide);
  
}

// Declare all the functions
function openModal(e) {
  var image = e.currentTarget;

  // This assumes the HTML structure is exactly as you posted
  var modal = image.parentNode.parentNode.nextElementSibling;
  
  // Set the display to block
  modal.style.display = "block";

  // Choose a slide
  if(image.hasAttribute("data-number")) {
    var slideNum = image.getAttribute("data-number");
    showSlide(modal, slideNum);
  }
}

function closeModal(e) {
  var modal = e.currentTarget.parentNode;
  modal.style.display = "none";
}

function nextSlide(e) {
  // This assumes the HTML structure is exactly as you posted
  var modal = e.currentTarget.parentNode.parentNode;
  var num = modal.getAttribute("data-slide");
  if(!num) num = 0;
  num++;
  showSlide(modal, num);
}

function prevSlide(e) {
  // This assumes the HTML structure is exactly as you posted
  var modal = e.currentTarget.parentNode.parentNode;
  var num = modal.getAttribute("data-slide");
  if(!num) num = 0;
  num--;
  showSlide(modal, num);
}

function showSlide(modal, num) {
  var slides = modal.getElementsByClassName("slide");
  var dots = modal.getElementsByClassName("dots");
  var captionText = modal.querySelector(".info");
  if (num >= slides.length) { num = 0 }
  if (num < 0) {num = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[num].style.display = "block";
  dots[num].className += " active";
  captionText.innerHTML = dots[num].alt;

  // Store the current slide in an attribute
  modal.setAttribute("data-slide", num);
}




















let slideIndex = 1;
function openLightbox_2() { 
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
  document.getElementById('dots').style.display = 'grid';
}
else {
  document.getElementById('dots').style.display = 'none';
}
};
function closeLightbox_2() {
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
