const menuBtn = document.querySelector('.menu-btn');
const navlinks =document.querySelector('.nav-links');
console.log("hello");
menuBtn.addEventListener('click',()=>
{
    navlinks.classList.toggle('mobile-menu');

}
);