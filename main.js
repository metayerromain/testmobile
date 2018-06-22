document.addEventListener('DOMContentLoaded', function(){

  window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 0,
    speed: 400,
    auto: 3000,
    draggable: true,
    continuous: false,
    disableScroll: true,
    stopPropagation: true,
    callback: function(index, elem, dir) {},
    transitionEnd: function(index, elem) {}
  });



  // включить видимость блока (по умолчанию скрыт)
  document.getElementById('slider').classList.add('swipe--enable');

});
