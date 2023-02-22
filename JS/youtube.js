//function stop() {
//var frame = document.getElementById("video_1");
//let video = document.getElementById("video_1")

//frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
//}


//const videos = document.querySelectorAll('iframe')
//var closeIcon = document.getElementsByClassName('close pointer');
//var prevIcon = document.getElementsByClassName('prev'); 
/var nexIcon = document.getElementsByClassName('nex'); 

//function closevideo(e)
//{
//    videos.forEach(i => {
//      const source = i.src
//      i.src = ''
//      i.src = source}) 
//};
//
//for (var i = 0; i < closeIcon.length; i++) {
//   closeIcon[i].addEventListener('click', closevideo); 
//}
//
//for (var i = 0; i < prevIcon.length; i++) {
//   prevIcon[i].addEventListener('click', closevideo); 
//}
//
//for (var i = 0; i < nexIcon.length; i++) {
//   nexIcon[i].addEventListener('click', closevideo); 
//}

/**
 * Stop an iframe or HTML5 <video> from playing
 * @param  {Element} element The element that contains the video
 */
var stopVideo = function () {
	var iframe = element.querySelector( 'iframe');
	var video = element.querySelector( 'div' );
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
};

