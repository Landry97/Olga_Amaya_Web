

// to stop the YouTube video
Video_element.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');

// To pause the YouTube video
Video_element.contentWindow.postMessage('{"event":"command","func":"PauseVideo","args":""}', '*');
