//function stop() {
//var frame = document.getElementById("video_1");
//let video = document.getElementById("video_1")

//frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
//}


const videos = document.querySelectorAll('iframe');
const close = document.getElementById("close-pointer");

close.addEventListener('click', () => {
   videos.forEach(i => {
      const source = i.src
      i.src = ''
      i.src = source
   })
})
