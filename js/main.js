const el = document.querySelectorAll('.mode-control .mode');
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    el[i].classList.remove("active");
    let nextSibling = el[i].nextElementSibling;
    if(nextSibling) {
        nextSibling.classList.add("active")
    }else {
        el[i].previousElementSibling.classList.add("active");
    }
};
}
// add in class
const toggleMenu = document.querySelector(".right-side");
const toggleIcon = document.querySelector(".toggle img");

toggleIcon.onclick = ()=>{
    toggleMenu.classList.toggle("in")
}

// dynamic heigth of main section
const main = document.getElementsByTagName("main");
let vh = window.innerHeight;

main[0].style.minHeight = `${vh-108}px`
window.addEventListener("resize", ()=>{
    vh = window.innerHeight;
    main[0].style.minHeight = `${vh-88}px`
})
