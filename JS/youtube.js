function pause() {
         let video1 = document.getElementById("video_1")
         video1.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
      }

function stop() {
         let video1 = document.getElementById("video_1")
         video1.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
      }
