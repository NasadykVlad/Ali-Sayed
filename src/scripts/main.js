"use strict";

const burgerIcon = document.querySelector('.top-right_container--burger_icon');
const btnViewHistory = document.querySelector('.button-view');
const btnGo = document.querySelector('.button-go');
const iconFacebook = document.querySelector('.icon-facebook');
const iconTwitter = document.querySelector('.icon-twitter');
const iconDribble = document.querySelector('.icon-dribble');
const logo = document.querySelector('#logo');

burgerIcon.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

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