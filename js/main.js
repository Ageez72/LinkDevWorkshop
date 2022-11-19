// set a background for navbar on scrolling
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName('nav')[0].style.background = "#fff";
  } else {
    document.getElementsByTagName('nav')[0].style.background = "transparent";
  }
}
// change language
$('.lang span').click(function(e) {
    $(this).removeClass('active').siblings().addClass('active');
  });
// add in class to show navbar on mobile
const toggleMenu = document.querySelector(".right-side");
const toggleIcon = document.querySelector(".toggle img");
toggleIcon.onclick = ()=>{
    toggleMenu.classList.toggle("in")
}
// (on click) add active class on banner elements
let el = document.querySelectorAll('.carousel-indicators span');
let mainContainers = document.querySelectorAll('.main-container');
let decoreImgs = document.querySelectorAll('.decore-img');
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    var c = 0;
    var x = 0;
    var e = 0;
    while (c < el.length) {
      el[c++].className = '';
    }
    el[i].className = 'active';
    while (x < mainContainers.length) {
        mainContainers[x++].className = 'main-container';
      }
    mainContainers[i].className = 'main-container active';
    while (e < decoreImgs.length) {
        decoreImgs[e++].className = 'decore-img rotate';
      }
      decoreImgs[i].className = 'decore-img rotate active';
  };
}

// automatically add active class on banner elements 
setInterval(() => {
     // Remove .active class from elements
     var next = $('.carousel-indicators button.active').removeClass('active').next('button');
     var next2 = $('.decore-img.active').removeClass('active').next('img');
     var next3 = $('.main-container.active').removeClass('active').next('div');
     // Did we reach the last element? Of so: select first sibling
     if (!next.length) {
        next = next.prevObject.siblings(':first');
        next2 = next2.prevObject.siblings(':first');
        next3 = next3.prevObject.siblings(':first');
     }
     // Add .active class to the next in line.
     next.addClass('active');
     next2.addClass('active');
     next3.addClass('active');
}, 10000);

// show favorite icon
const favoriteNewsImgs = document.querySelectorAll(".react-imgs .favorite-img");
favoriteNewsImgs.forEach((img) => {
    img.addEventListener("click", ()=>{
       let imgSrc = img.src;
       imgSrc.includes("fill") ? img.src = imgSrc.replace("favorite_fill","favorite"): img.src = img.dataset.fill;
    })
})

// show news share links
const shareNewsImgs = document.querySelectorAll(".react-imgs .share-img");
shareNewsImgs.forEach((item,index) => {
    item.addEventListener("click", ()=>{
        item.parentNode.querySelector(".share-popup").classList.toggle("show")
    })
})