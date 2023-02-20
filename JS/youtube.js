function stop() {
var frame = document.getElementById("video_1");
let video = document.getElementById("video_1")

frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
}
