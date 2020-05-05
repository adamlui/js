function hideTdo() {
  var timer = null;
  var target = document.querySelectorAll('#tidio-chat iframe')[0];
  if(!target || typeof target === 'undefined') {
    if(timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(hideTdo, 500);
    return;
  } else {
    var timer2 = null;
    var tdo = document.querySelector('#tidio-chat iframe').contentDocument.querySelector(`a.powered`);
    if(!tdo || typeof tdo === 'undefined') {
      if(timer2 !== null) {
        clearTimeout(timer2);
      }
      timer2 = setTimeout(hideTdo, 1);
      return;
    }
    document.querySelector('#tidio-chat iframe').contentDocument.querySelector(`a.powered`).remove();
    return true;
  }
}
hideTdo();
setInterval(hideTdo, 10);
