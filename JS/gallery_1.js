function openLightbox_1() { 
  document.getElementById('projecttitle_1').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementById('mouseTarget').style.top = '0';
  document.getElementById('mouseTarget').style.zIndex = '100001';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_1').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  document.getElementById('menu-toggle').style.display = 'none';
  
  var ilink = window.matchMedia( "(min-width: 950px)" );
  if (ilink.matches) {
  document.getElementById('infolink_2').style.display = 'flex';
  document.getElementById('infolink_3').style.display = 'flex';
  document.getElementById('infolink_4').style.display = 'flex';
}
else {
  
  document.getElementById('infolink_2').style.display = 'none';
  document.getElementById('infolink_3').style.display = 'none';
  document.getElementById('infolink_4').style.display = 'none';
}
};

function closeLightbox_1() {
  x.addListener(scale);
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementById('projecttitle_1').style.display = 'none';
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




function openLightbox_2() { 
  closeLightbox_1();
  
  document.getElementById('projecttitle_2').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
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
  
  pause();
  x.addListener(scale);
  document.getElementById('projecttitle_2').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
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
  document.getElementById('menu-toggle').style.display = 'none';
}
};


function openLightbox_3() { 
  closeLightbox_2();
  
  
  
  document.getElementById('projecttitle_3').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_3').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_3() {
  x.addListener(scale);
  closevideo();
 
  
  document.getElementById('projecttitle_3').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
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
  document.getElementById('menu-toggle').style.display = 'none';
}
};



function openLightbox_4() { 
  closeLightbox_3();
  
  
  document.getElementById('projecttitle_4').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_4').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_4() {
  x.addListener(scale);
  
  document.getElementById('projecttitle_4').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_4').style.display = 'none'; 
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






function openLightbox_5() { 
  closeLightbox_4();
  
  document.getElementById('projecttitle_5').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_5').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  
};

function closeLightbox_5() {
  x.addListener(scale);
  
  
  document.getElementById('projecttitle_5').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_5').style.display = 'none'; 
  document.getElementById('rowid').style.display = 'grid';
  document.getElementsByTagName("Footer")[0].style.display = "flex";  
  var mq = window.matchMedia( "(max-width: 950px)" );
if (mq.matches) {
  document.getElementById('menu-toggle').style.display = 'flex';
}
else {
  document.getElementById('menu-toggle').style.display = 'none';
}
};






function openLightbox_6() { 
  closeLightbox_5();
  
  document.getElementById('projecttitle_6').style.display = 'block';
  
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_6').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  document.getElementById('menu-toggle').style.display = 'none';
};

function closeLightbox_6() {
  x.addListener(scale);
  
  document.getElementById('projecttitle_6').style.display = 'none';
  document.getElementById('mousetarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_6').style.display = 'none'; 
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










function changeSlide1(n) {
  showSlide1(slideIndex += n);
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide1(-1);}  
if (event.keyCode == 39) {
    changeSlide1(1);}
};
};

function changeSlide2(n) {
  showSlide2(slideIndex += n);
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide2(-1);}  
if (event.keyCode == 39) {
    changeSlide2(1);}
};
};

function changeSlide3(n) {
  showSlide3(slideIndex += n);
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide3(-1);}  
if (event.keyCode == 39) {
    changeSlide3(1);}
};
};

function changeSlide4(n) {
  pause();
  showSlide4(slideIndex += n);
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide4(-1);}  
if (event.keyCode == 39) {
    changeSlide4(1);}
};
};

function changeSlide5(n) {
  showSlide5(slideIndex += n);
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide5(-1);}  
if (event.keyCode == 39) {
    changeSlide5(1);}
};
};

function changeSlide6(n) {
  showSlide6(slideIndex += n);
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide6(-1);}  
if (event.keyCode == 39) {
    changeSlide6(1);}
};
};


function toSlide1(n) {
  showSlide1(slideIndex = n);
};

function toSlide2(n) {
  showSlide2(slideIndex = n);
};

function toSlide3(n) {
  showSlide3(slideIndex = n);
};

function toSlide4(n) {
  showSlide4(slideIndex = n);
};

function toSlide5(n) {
  showSlide5(slideIndex = n);
};

function toSlide6(n) {
  showSlide6(slideIndex = n);
};




function showSlide1(n) {
  const slides1 = document.getElementsByClassName('slide1');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
  
  if (n > 1) {
  document.getElementById('next').style.display = 'flex';
  };
 
  if (n > slides1.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides1.length;
  };
  

  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides1[slideIndex - 1].style.display = 'flex';
  };


function showSlide2(n) {
  const slides2 = document.getElementsByClassName('slide2');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides2.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides2.length;
  };
  

  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides2[slideIndex - 1].style.display = 'flex';
  };

function showSlide3(n) {
  const slides3 = document.getElementsByClassName('slide3');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides3.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides3.length;
  };
  

  for (let i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides3[slideIndex - 1].style.display = 'flex';
  };


function showSlide4(n) {
  const slides4 = document.getElementsByClassName('slide4');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides4.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides4.length;
  };
  

  for (let i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides4[slideIndex - 1].style.display = 'flex';
  };


function showSlide5(n) {
  const slides5 = document.getElementsByClassName('slide5');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides5.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides5.length;
  };
  

  for (let i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides5[slideIndex - 1].style.display = 'flex';
  };


function showSlide6(n) {
  const slides6 = document.getElementsByClassName('slide2');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides6.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides6.length;
  };
  

  for (let i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides6[slideIndex - 1].style.display = 'flex';
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

var leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;
var keystate = [''];
document.addEventListener("keydown", function (e) {
    keystate[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    delete keystate[e.keyCode];
});

if (keystate[leftKey]) {
//code to be executed when left arrow key is pushed.
  changeSlide1(-1);changeSlide2(-1);changeSlide3(-1);changeSlide4(-1);changeSlide5(-1);changeSlide6(-1);changeSlide7(-1);
}
if (keystate[rightKey]) {
//code to be executed when right arrow key is pushed.
  changeSlide1(1);changeSlide2(1);changeSlide3(1);changeSlide4(1);changeSlide5(1);changeSlide6(1);changeSlide7(1);
}

      // to pause the video
      function pause() {
         let video = document.getElementById("video_1")
         video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
      }
