function closeLightbox_1(){
    var list = document.getElementsByClassName('slide1');
    for (var i=0; i<list.length; i++) {
        list[i].style.display = 'none';
    }
    document.getElementById('lightbox_1').style.display='none';
}
// Declare iterators.
var i, j;

// Go through each row and assign events
var rows = document.getElementsByClassName("project-list-index");
var images;
for(i = 0; i < rows.length; i++) {
  // Prepare each image in the row
  images = rows[i].getElementsByTagName("figcaption");
  for(j = 0; j < images.length; j++) {
    // Use the image's position as its slide number and save it in an attribute
    images[j].setAttribute("data-number", j);
    
    // Assign an event listener to the image
    images[j].addEventListener("click", openModal);
  }
}


// Declare all the functions
function openModal(e) {
  var image = e.currentTarget;

  // This assumes the HTML structure is exactly as you posted
  var modal = picture.parentNode.parentNode.nextElementSibling;
  
  // Set the display to flex
  modal.style.display = "flex";

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
  var slides = modal.getElementsByClassName("mySlides");
  var dots = modal.getElementsByClassName("demo");
  var captionText = modal.querySelector(".caption p");
  if (num >= slides.length) { num = 0 }
  if (num < 0) {num = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[num].style.display = "flex";
  dots[num].className += " active";
  captionText.innerHTML = dots[num].alt;

  // Store the current slide in an attribute
  modal.setAttribute("data-slide", num);
}


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
