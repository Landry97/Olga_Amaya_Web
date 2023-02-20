function pause() {
         let video = document.getElementById("video_1")
         video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
      }

function stop() {
         let video = document.getElementById("video_1")
         video.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
      }
