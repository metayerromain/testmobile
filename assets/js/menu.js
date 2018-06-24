var burgerItems = document.querySelectorAll(".header__burger-round");
var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".menu");
var tab = [];

burger.addEventListener("click", function(){
  burger.classList.toggle("active");
  var burgerClass = burger.className.split(" ")[1];
  if (burgerClass == "active") {
    menu.style.opacity = "1";
    menu.style.zIndex = "1";
    for (var i = 0; i < burgerItems.length; i++) {
      var classBurger = burgerItems[i].className.split(" ")[1];
      tab.push(classBurger);
      burgerItems[i].classList.remove(classBurger);
      burgerItems[i].classList.add("menuActive");
    }
  } else {
    menu.style.opacity = "0";
    menu.style.zIndex = "-1";
    for (var i = 0; i < burgerItems.length; i++) {
      var classBurger = burgerItems[i].className.split(" ")[1];
      burgerItems[i].classList.remove(classBurger);
      burgerItems[i].classList.add(tab[i]);
    }
  }

})
