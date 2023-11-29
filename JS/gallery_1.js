function openLightbox_1() { 
  setkeys_1();
  closeLightbox_21();
  closeLightbox_2();
  
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
  };
  

function closeLightbox_1() {
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
  setkeys_2();
  closeLightbox_1();
  closeLightbox_3();
  
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
  
  setkeys_3();
  closeLightbox_2();
  closeLightbox_4();
  
  
  
  document.getElementById('projecttitle_3').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_3').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_3() {
  pause3();
 
  
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
  
  setkeys_4();
  closeLightbox_3();
  closeLightbox_5();
  
  
  document.getElementById('projecttitle_4').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_4').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_4() {
  pause4();
  
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
  
  
  setkeys_5();
  closeLightbox_4();
  closeLightbox_6();
  
  document.getElementById('projecttitle_5').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_5').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  
};

function closeLightbox_5() {
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
  
  setkeys_6();
  closeLightbox_5();
  closeLightbox_7();
  
  document.getElementById('projecttitle_6').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_6').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  
};

function closeLightbox_6() {
  document.getElementById('projecttitle_6').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_6').style.display = 'none'; 
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

function openLightbox_7() { 
  
  setkeys_7();
  closeLightbox_6();
  closeLightbox_8();
  
  document.getElementById('projecttitle_7').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_7').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_7() {
  pause7();
 
  
  document.getElementById('projecttitle_7').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_7').style.display = 'none'; 
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




function openLightbox_8() { 
  
  setkeys_8();
  closeLightbox_7();
  closeLightbox_9();
  
  document.getElementById('projecttitle_8').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_8').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  
};

function closeLightbox_8() {
  pause8();
  
  
  document.getElementById('projecttitle_8').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_8').style.display = 'none'; 
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

function openLightbox_9() { 
  
  setkeys_9();
  closeLightbox_8();
  closeLightbox_10();
  
  document.getElementById('projecttitle_9').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_9').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  
};

function closeLightbox_9() {
  pause9();
  
  
  document.getElementById('projecttitle_9').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_9').style.display = 'none'; 
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




function openLightbox_10() { 
  
  setkeys_10();
  closeLightbox_9();
  closeLightbox_11();
  
  document.getElementById('projecttitle_10').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_10').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
  
};

function closeLightbox_10() {
  pause10();
  
  
  document.getElementById('projecttitle_10').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_10').style.display = 'none'; 
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

function openLightbox_11() { 
  
  setkeys_11();
  closeLightbox_10();
  closeLightbox_12();
  
  document.getElementById('projecttitle_11').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_11').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_11() {
  
  document.getElementById('projecttitle_11').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_11').style.display = 'none'; 
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

function openLightbox_12() { 
  
  setkeys_12();
  closeLightbox_11();
  closeLightbox_13();
  
  document.getElementById('projecttitle_12').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_12').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_12() { 
  document.getElementById('projecttitle_12').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_12').style.display = 'none'; 
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

function openLightbox_13() { 
  
  setkeys_13();
  closeLightbox_12();
  closeLightbox_14();
  
  document.getElementById('projecttitle_13').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_13').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_13() {
  document.getElementById('projecttitle_13').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_13').style.display = 'none'; 
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

function openLightbox_14() { 
  
  setkeys_14();
  closeLightbox_13();
  closeLightbox_15();
  
  document.getElementById('projecttitle_14').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_14').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_14() {
  document.getElementById('projecttitle_14').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_14').style.display = 'none'; 
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

function openLightbox_15() { 
  
  setkeys_15();
  closeLightbox_14();
  closeLightbox_16();
  
  document.getElementById('projecttitle_15').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_15').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_15() {
  document.getElementById('projecttitle_15').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_15').style.display = 'none'; 
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

function openLightbox_16() { 
  
  setkeys_16();
  closeLightbox_15();
  closeLightbox_17();
  
  document.getElementById('projecttitle_16').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_16').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_16() {
  document.getElementById('projecttitle_16').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_16').style.display = 'none'; 
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

function openLightbox_17() { 
  
  setkeys_17();
  closeLightbox_16();
  closeLightbox_18();
  
  document.getElementById('projecttitle_17').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_17').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_17() {
  document.getElementById('projecttitle_17').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_17').style.display = 'none'; 
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

function openLightbox_18() { 
  
  setkeys_18();
  closeLightbox_17();
  
  document.getElementById('projecttitle_18').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_18').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_18() {
  document.getElementById('projecttitle_18').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_18').style.display = 'none'; 
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

function openLightbox_19() { 
  
  setkeys_19();
  closeLightbox_18();
  
  document.getElementById('projecttitle_19').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_19').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_19() {
  document.getElementById('projecttitle_19').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_19').style.display = 'none'; 
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



function openLightbox_20() { 
  
  setkeys_20();
  closeLightbox_19();
  
  document.getElementById('projecttitle_20').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_20').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_20() {
  document.getElementById('projecttitle_20').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_20').style.display = 'none'; 
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

function openLightbox_21() { 
  
  setkeys_21();
  closeLightbox_20();
  
  document.getElementById('projecttitle_21').style.display = 'block';
  document.getElementById('mouseTarget').style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox_21').style.display = 'flex';
  document.getElementById('rowid').style.display = 'none';
  document.getElementById('menu-toggle').style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = "none";
};

function closeLightbox_21() {
  document.getElementById('projecttitle_21').style.display = 'none';
  document.getElementById('mouseTarget').style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox_21').style.display = 'none'; 
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
};

function setkeys_1(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide1(-1);}  
if (event.keyCode == 39) {
    changeSlide1(1);}
};
};

function changeSlide2(n) {
  showSlide2(slideIndex += n);
};


function setkeys_2(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide2(-1);}  
if (event.keyCode == 39) {
    changeSlide2(1);}
};
};

function changeSlide3(n) {
  pause3();
  showSlide3(slideIndex += n);
};

function setkeys_3(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide3(-1);}  
if (event.keyCode == 39) {
    changeSlide3(1);}
};
};

function changeSlide4(n) {
  pause4();
  showSlide4(slideIndex += n);
};

function setkeys_4(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide4(-1);}  
if (event.keyCode == 39) {
    changeSlide4(1);}
};
};

function changeSlide5(n) {
  showSlide5(slideIndex += n);
};

function setkeys_5(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide5(-1);}  
if (event.keyCode == 39) {
    changeSlide5(1);}
};
};

function changeSlide6(n) {
  showSlide6(slideIndex += n);
};

function setkeys_6(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide6(-1);}  
if (event.keyCode == 39) {
    changeSlide6(1);}
};
};

function changeSlide7(n) {
  showSlide7(slideIndex += n);
  pause7();
};

function setkeys_7(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide7(-1);}  
if (event.keyCode == 39) {
    changeSlide7(1);}
};
};


function changeSlide8(n) {
  showSlide8(slideIndex += n);
  pause8();
};

function setkeys_8(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide8(-1);}  
if (event.keyCode == 39) {
    changeSlide8(1);}
};
};

function changeSlide9(n) {
  showSlide9(slideIndex += n);
  pause9();
};

function setkeys_9(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide9(-1);}  
if (event.keyCode == 39) {
    changeSlide9(1);}
};
};


function changeSlide10(n) {
  showSlide10(slideIndex += n);
  pause10();
};

function setkeys_10(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide10(-1);}  
if (event.keyCode == 39) {
    changeSlide10(1);}
};
};

function changeSlide11(n) {
  showSlide11(slideIndex += n);
};

function setkeys_11(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide11(-1);}  
if (event.keyCode == 39) {
    changeSlide11(1);}
};
};

function changeSlide12(n) {
  showSlide12(slideIndex += n);
};

function setkeys_12(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide12(-1);}  
if (event.keyCode == 39) {
    changeSlide12(1);}
};
};

function changeSlide13(n) {
  showSlide13(slideIndex += n);
};

function setkeys_13(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide13(-1);}  
if (event.keyCode == 39) {
    changeSlide13(1);}
};
};

function changeSlide14(n) {
  showSlide14(slideIndex += n);
};

function setkeys_14(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide14(-1);}  
if (event.keyCode == 39) {
    changeSlide14(1);}
};
};

function changeSlide15(n) {
  showSlide15(slideIndex += n);
};

function setkeys_15(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide15(-1);}  
if (event.keyCode == 39) {
    changeSlide15(1);}
};
};

function changeSlide16(n) {
  showSlide16(slideIndex += n);
};

function setkeys_16(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide16(-1);}  
if (event.keyCode == 39) {
    changeSlide16(1);}
};
};

function changeSlide17(n) {
  showSlide17(slideIndex += n);
};

function setkeys_17(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide17(-1);}  
if (event.keyCode == 39) {
    changeSlide17(1);}
};
};

function changeSlide18(n) {
  showSlide18(slideIndex += n);
};

function setkeys_18(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide18(-1);}  
if (event.keyCode == 39) {
    changeSlide18(1);}
};
};

function changeSlide19(n) {
  showSlide19(slideIndex += n);
};

function setkeys_19(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide19(-1);}  
if (event.keyCode == 39) {
    changeSlide19(1);}
};
};

function changeSlide20(n) {
  showSlide20(slideIndex += n);
};

function setkeys_20(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide20(-1);}  
if (event.keyCode == 39) {
    changeSlide20(1);}
};
};

function changeSlide21(n) {
  showSlide21(slideIndex += n);
};

function setkeys_21(){
  window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide21(-1);}  
if (event.keyCode == 39) {
    changeSlide21(1);}
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

function toSlide7(n) {
  showSlide7(slideIndex = n);
};

function toSlide8(n) {
  showSlide8(slideIndex = n);
};

function toSlide9(n) {
  showSlide9(slideIndex = n);
};

function toSlide10(n) {
  showSlide10(slideIndex = n);
};
function toSlide11(n) {
  showSlide11(slideIndex = n);
};
function toSlide12(n) {
  showSlide12(slideIndex = n);
};
function toSlide13(n) {
  showSlide13(slideIndex = n);
};
function toSlide14(n) {
  showSlide14(slideIndex = n);
};
function toSlide15(n) {
  showSlide15(slideIndex = n);
};
function toSlide16(n) {
  showSlide16(slideIndex = n);
};
function toSlide17(n) {
  showSlide17(slideIndex = n);
};
function toSlide18(n) {
  showSlide18(slideIndex = n);
};
function toSlide19(n) {
  showSlide19(slideIndex = n);
};
function toSlide20(n) {
  showSlide20(slideIndex = n);
};
function toSlide21(n) {
  showSlide21(slideIndex = n);
};


function showSlide1(n) {
  const slides1 = document.getElementsByClassName('slide1');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
  
 
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
  const slides6 = document.getElementsByClassName('slide6');
  
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




function showSlide7(n) {
  const slides7 = document.getElementsByClassName('slide7');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides7.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides7.length;
  };
  

  for (let i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides7[slideIndex - 1].style.display = 'flex';
  };


function showSlide8(n) {
  const slides8 = document.getElementsByClassName('slide8');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides8.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides8.length;
  };
  

  for (let i = 0; i < slides8.length; i++) {
    slides8[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides8[slideIndex - 1].style.display = 'flex';
  };



function showSlide9(n) {
  const slides9 = document.getElementsByClassName('slide9');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides9.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides9.length;
  };
  

  for (let i = 0; i < slides9.length; i++) {
    slides9[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides9[slideIndex - 1].style.display = 'flex';
  };




function showSlide10(n) {
  const slides10 = document.getElementsByClassName('slide10');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides10.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides10.length;
  };
  

  for (let i = 0; i < slides10.length; i++) {
    slides10[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides10[slideIndex - 1].style.display = 'flex';
  };



function showSlide11(n) {
  const slides11 = document.getElementsByClassName('slide11');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides11.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides11.length;
  };
  

  for (let i = 0; i < slides11.length; i++) {
    slides11[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides11[slideIndex - 1].style.display = 'flex';
  };


function showSlide12(n) {
  const slides12 = document.getElementsByClassName('slide12');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides12.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides12.length;
  };
  

  for (let i = 0; i < slides12.length; i++) {
    slides12[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides12[slideIndex - 1].style.display = 'flex';
  };


function showSlide13(n) {
  const slides13 = document.getElementsByClassName('slide13');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides13.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides13.length;
  };
  

  for (let i = 0; i < slides13.length; i++) {
    slides13[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides13[slideIndex - 1].style.display = 'flex';
  };

function showSlide14(n) {
  const slides14 = document.getElementsByClassName('slide14');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides14.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides14.length;
  };
  

  for (let i = 0; i < slides14.length; i++) {
    slides14[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides14[slideIndex - 1].style.display = 'flex';
  };



function showSlide15(n) {
  const slides15 = document.getElementsByClassName('slide15');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
  
 
  if (n > slides15.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides15.length;
  };
  

  for (let i = 0; i < slides15.length; i++) {
    slides15[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides15[slideIndex - 1].style.display = 'flex';
  };



function showSlide16(n) {
  const slides16 = document.getElementsByClassName('slide16');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
  
 
  if (n > slides16.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides16.length;
  };
  

  for (let i = 0; i < slides16.length; i++) {
    slides16[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides16[slideIndex - 1].style.display = 'flex';
  };



function showSlide17(n) {
  const slides17 = document.getElementsByClassName('slide17');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides17.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides17.length;
  };
  

  for (let i = 0; i < slides17.length; i++) {
    slides17[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides17[slideIndex - 1].style.display = 'flex';
  };


function showSlide18(n) {
  const slides18 = document.getElementsByClassName('slide18');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides18.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides18.length;
  };
  

  for (let i = 0; i < slides18.length; i++) {
    slides18[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides18[slideIndex - 1].style.display = 'flex';
  };



function showSlide19(n) {
  const slides19 = document.getElementsByClassName('slide19');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides19.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides19.length;
  };
  

  for (let i = 0; i < slides19.length; i++) {
    slides19[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides19[slideIndex - 1].style.display = 'flex';
  };

function showSlide20(n) {
  const slides20 = document.getElementsByClassName('slide20');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides20.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides20.length;
  };
  

  for (let i = 0; i < slides20.length; i++) {
    slides20[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides20[slideIndex - 1].style.display = 'flex';
  };

function showSlide21(n) {
  const slides21 = document.getElementsByClassName('slide21');
  
  let modalPreviews = document.getElementsByClassName('modal-preview');
 
  if (n > slides21.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides21.length;
  };
  

  for (let i = 0; i < slides21.length; i++) {
    slides21[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides21[slideIndex - 1].style.display = 'flex';
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


 function pause3() {
let iframe3 = document.getElementById("videoId_3");
var temp = iframe3.src; 
iframe3.src = temp;
 };

 function pause4() {
let iframe4 = document.getElementById("videoId_4");
var temp = iframe4.src; 
iframe4.src = temp;
 };

function pause7() {
let iframe7 = document.getElementById("videoId_7");
var temp = iframe7.src; 
iframe7.src = temp;
 };

function pause8() {
let iframe8 = document.getElementById("videoId_8");
var temp = iframe8.src; 
iframe8.src = temp;
 };

function pause9() {
let iframe9 = document.getElementById("videoId_9");
var temp = iframe9.src; 
iframe9.src = temp;
 };


function pause10() {
let iframe10 = document.getElementById("videoId_10");
var temp = iframe10.src; 
iframe10.src = temp;
 };


