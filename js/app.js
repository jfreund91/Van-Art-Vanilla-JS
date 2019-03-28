const imgSources = [
    "images/eclipse.png",
    "images/postman.png",
    "images/vs.png",
    "images/vue.png",
    "images/gandalf.png"
];
let logoPresent = false;
const overlay = document.getElementById('overlay');
function displayImgSources() {
    imgSources.forEach((source) =>{
    let img = document.createElement('img');
    img.classList.add("logo-img");
    img.src= source;
    let imgContainer = document.getElementById("img-option-container");
    imgContainer.appendChild(img);
    img.addEventListener('click',(event) => {addLogo(event.target.src)});
});}

function addLogo(src) {
    if(logoPresent === false) {
        let logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = src;
        overlay.appendChild(logo);
        logoPresent = true;
    } else {
        document.getElementById('overlay').querySelector('img').src=src;
    }
}
document.addEventListener("DOMContentLoaded", () => {
displayImgSources();
let options = document.querySelectorAll('.logo-img');

});