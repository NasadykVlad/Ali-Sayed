"use strict";

const btnViewHistory = document.querySelector('.button-view');
const btnGo = document.querySelector('.button-go');
const iconFacebook = document.querySelector('.icon-facebook');
const iconTwitter = document.querySelector('.icon-twitter');
const iconDribble = document.querySelector('.icon-dribble');
const logo = document.querySelector('#logo');
let flagBurgerMenu = false;

function menuBtn() {
    const menuBox = document.querySelector('.menu__box');
    flagBurgerMenu = !flagBurgerMenu;
    if (flagBurgerMenu) {
        menuBox.style.visibility = "visible";
        menuBox.style.display = "block";
    } else {
        menuBox.style.visibility = "hidden";
        menuBox.style.display = "none";
    }
}

btnViewHistory.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

btnGo.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

iconFacebook.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

iconTwitter.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

iconDribble.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

logo.addEventListener("mouseover", function() {
    this.style.transition = "1s";
    this.style.transform = "scale(1.5) rotate3d(1, 1, 1, 359deg)";
});

logo.addEventListener("mouseout", function() {
    this.style.transition = "1s";
    this.style.transform = "scale(1)";
});