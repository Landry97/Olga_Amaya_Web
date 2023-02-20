//function stop() {
//var frame = document.getElementById("video_1");
//let video = document.getElementById("video_1")

//frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
//}


const videos = document.querySelectorAll('iframe')
var closeIcon = document.getElementsByClassName('close pointer'); 

function closevideo(e)
{
    videos.forEach(i => {
      const source = i.src
      i.src = ''
      i.src = source
};

for (var i = 0; i < closeIcon.length; i++) {
   closeIcon[i].addEventListener('click', closevideo); 
}
