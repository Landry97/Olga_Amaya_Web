var frame = document.querySelector('iframe');
var controls = document.querySelectorAll('.arrow right');

var message = function(func) {
  return JSON.stringify({
    event: 'command',
    func: func,
    args: []
  });
};

var execCommand = function(frame) {
  return function(func) {
    return function() {
      frame.contentWindow.postMessage(message(func), '*');
    };
  };
};

var frameCommand = execCommand(frame);

var configControl = function(vc) {
  var func = vc.getAttribute('data-func');
  var handler = frameCommand(func);
  vc.tabIndex = 0;
  vc.addEventListener('click', handler, false);
};

[].forEach.call(controls, configControl);
