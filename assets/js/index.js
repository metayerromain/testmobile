var p1 = document.getElementById('client1');
var p2 = document.getElementById('client2');
var p3 = document.getElementById('client3');

var startingX;

function p1start(e){
  startingX = e.touches[0].clientX;
}

function p1move(e){
  var touch = e.touches[0];
  var change = startingX - touch.clientX;
  if (change<0) {
    return;
  }
  p1.style.left = '-' + change + 'px';
  p2.style.display = 'block';
  p2.style.left = (screen.width - change) + 'px';
  e.preventDefault();
}

function p1end(e){
  var change = startingX - e.changedTouches[0].clientX;
  var half = screen.width / 3;
  if (change < half) {
    p1.style.left = 0;
    p2.style.left = '100%';
    p2.style.display = "none";
  } else {
    p1.style.transition = "all .3s";
    p2.style.transition = "all .3s";
    p1.style.left = "-100%";
    p2.style.left = '0';
    p2.style.display = 'block';
  }
}

function p2start(e){
  startingX = e.touches[0].clientX;
  p1.style.transition = '';
  p2.style.transition = '';
  p1.style.display = 'none';
}

function p2move(e){
  var touch = e.touches[0];
  var change = touch.clientX - startingX;
  if (change < 0) {
    p3.style.display = 'block';
    p3.style.left = (change + screen.width) + 'px';
    p2.style.left = change - 'px';
  }
  p1.style.display = 'block';
  p1.style.left = (change - screen.width) + 'px';
  p2.style.left = change + 'px';
  e.preventDefault();
}

function p2end(e){
  var change = e.changedTouches[0].clientX - startingX;
  var half = screen.width / 3;
  if (change < half) {
    p1.style.left = '-200%';
    p1.style.display = "none";
    p2.style.display = "none";
    p2.style.left = '-100%';
    p3.style.left = "0";
  } else {
    p1.style.transition = "all .3s";
    p2.style.transition = "all .3s";
    p1.style.left = "0";
    p2.style.left = '100%';
  }
}

function p3start(e){
  startingX = e.touches[0].clientX;
  p2.style.transition = '';
  p3.style.transition = '';
  p2.style.display = 'none';
}

function p3move(e){
  var touch = e.touches[0];
  var change = touch.clientX - startingX;
  if (change < 0) {
    return;
  }
  p2.style.display = 'block';
  p2.style.left = (change - screen.width) + 'px';
  p3.style.left = change + 'px';
  e.preventDefault();
}

function p3end(e){
  var change = e.changedTouches[0].clientX - startingX;
  var half = screen.width / 3;
  if (change < half) {
    p2.style.left = '-100%';
    p2.style.display = "none";
    p3.style.left = '0';
  } else {
    p2.style.transition = "all .3s";
    p3.style.transition = "all .3s";
    p2.style.left = "0";
    p3.style.left = '100%';
  }
}
