document.addEventListener("DOMContentLoaded", () => {
})

var div4 = document.querySelector('#audio_svg1') 
var audio1 = document.querySelector('#audio1')
div4.addEventListener("mouseenter", function(){
  audio1.play()
});
div4.addEventListener("mouseout", function(){
  audio1.pause()
  audio1.currentTime = 0.0;
});


var div5 = document.querySelector('#audio_svg2') 
var audio2 = document.querySelector('#audio2')
div5.addEventListener("mouseenter", function(){
  audio2.play()
});
div5.addEventListener("mouseout", function(){
  audio2.pause()
  audio2.currentTime = 0.0;
});

const navItems = document.querySelectorAll(".menu_items[data-goto]");
if (navItems.length > 0) {
  navItems.forEach((item) => {
    item.addEventListener("click", onNavItemClick);
  });

  function onNavItemClick(event) {
    const navItem = event.target;
    if (navItem.dataset.goto && document.getElementById(navItem.dataset.goto)) {
      const gotoBlock = document.getElementById(navItem.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}

var buttonEl = document.querySelector('#audio_svg1');

function animate() {
  anime.remove(buttonEl);
  anime({
    targets: buttonEl,
    translateY: [0, -15],
    rotate: [-10, 10],
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
  });
}

function stop() {
  anime.remove(buttonEl);
  anime({
    targets: buttonEl,
    translateY: 0,
    rotate: 0,
    easing: 'linear',
  });
}

buttonEl.addEventListener('mouseenter', animate, false);
buttonEl.addEventListener('mouseleave', stop, false);



var buttonE2 = document.querySelector('#audio_svg2');

function animate2() {
  anime.remove(buttonE2);
  anime({
    targets: buttonE2,
    rotate: [0, 30],
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
  });
}

function stop2() {
  anime.remove(buttonE2);
  anime({
    targets: buttonE2,
    rotate: 0,
    easing: 'linear',
  });
}


buttonE2.addEventListener('mouseenter', animate2, false);
buttonE2.addEventListener('mouseleave', stop2, false);



var buttonE3 = document.querySelector('#audio_svg3');

function animate3() {
  anime.remove(buttonE3);
  anime({
    targets: buttonE3,
    rotate: 360,
    easing: 'easeInOutSine',
  });
}


buttonE3.addEventListener('mouseenter', animate3, false);
buttonE3.addEventListener('mouseleave', stop3, false);