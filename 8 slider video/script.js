function toggleMenu(){
    const menuIcon = document.querySelector('.menuIcon');
    const navBar = document.getElementById('navBar');
    menuIcon.classList.toggle('active');
    navBar.classList.toggle('active');
}
const slideShow = document.getElementById('SlideShow');
const slides = slideShow.getElementsByTagName('video');
var index=0;
function nextSlide(){
    slides[index].classList.remove('active');
   index=(index+1)%slides.length;
   slides[index].classList.add('active');
   console.log(index+ "next");
}
function prevSlide(){
    slides[index].classList.remove('active');
   index=(index- 1 +slides.length)%slides.length;
   slides[index].classList.add('active');
   console.log(index+"volver");
}
const slideShowText = document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');
var i=0;
function nextSlideText(){
    slidesText[i].classList.remove('active');
    i = (i + 1) %slidesText.length;
    slidesText[i].classList.add('active');
}
function prevSlideText(){
    slidesText[i].classList.remove('active');
    i = (i - 1 + slidesText.length) %slidesText.length;
    slidesText[i].classList.add('active');
}
