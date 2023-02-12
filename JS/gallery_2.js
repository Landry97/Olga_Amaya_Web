// Declare iterators.
var i, j;

// Go through each row and assign events
var rows = document.getElementsByClassName(".row");
var images;
for(i = 0; i < rows.length; i++) {
  // Prepare each image in the row
  images = rows[i].getElementsByTagName("img");
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
  close = modal.querySelector(".close");
  close.addEventListener("click", closeModal);
  
  // Next button
  next = modal.querySelector(".next");
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
  slides[num].style.display = "block";
  dots[num].className += " active";
  captionText.innerHTML = dots[num].alt;

  // Store the current slide in an attribute
  modal.setAttribute("data-slide", num);
}
