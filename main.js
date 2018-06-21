var container = document.querySelector('.container');
var sections = document.querySelectorAll('section');
var screenWidth = window.innerWidth;
var decalage;
var posX;

for (var i = 0; i < sections.length; i++) {
  container.addEventListener("touchmove", function(e){
    posX = e.touches[0].clientX;
    console.log(screenWidth - posX);
    decalage = screenWidth - posX;
    sections[0].style.transform = "translateX(" + decalage + "px)";
    //sections[1].style.transform = "translateX(" + decalage + "px)";
  });
  container.addEventListener("touchend", function(){
    console.log(posX, screenWidth/2)
    if (posX < screenWidth/2) {
      sections[0].style.transform = "translateX(0)";
      sections[1].style.transform = "translateX(-100vw)";
    }
  })
}
