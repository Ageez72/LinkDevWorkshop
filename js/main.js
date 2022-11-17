// add in class to show navbar on mobile
const toggleMenu = document.querySelector(".right-side");
const toggleIcon = document.querySelector(".toggle img");
toggleIcon.onclick = ()=>{
    toggleMenu.classList.toggle("in")
}
// const el = document.querySelectorAll('.mode-control .mode');
// for (let i = 0; i < el.length; i++) {
//   el[i].onclick = function() {
//     el[i].classList.remove("active");
//     let nextSibling = el[i].nextElementSibling;
//     if(nextSibling) {
//         nextSibling.classList.add("active")
//     }else {
//         el[i].previousElementSibling.classList.add("active");
//     }
// };
// }

// dynamic heigth of main section
const main = document.getElementsByTagName("main");
let vh = window.innerHeight;
main[0].style.minHeight = `${vh-108}px`
window.addEventListener("resize", ()=>{
    vh = window.innerHeight;
    main[0].style.minHeight = `${vh-88}px`
})

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