"use strict"

const burgerIcon = document.querySelector('.top-right_container--burger_icon');
const btnViewHistory = document.querySelector('.button-view');
const btnGo = document.querySelector('.button-go');

burgerIcon.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

btnViewHistory.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});

btnGo.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});