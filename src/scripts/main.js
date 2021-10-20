"use strict"

const burgerIcon = document.querySelector('.top-right_container--burger_icon');

burgerIcon.addEventListener("mouseout", function() {
    this.style.transition = ".5s";
});