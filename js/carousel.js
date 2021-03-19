$(document).ready(function () {
    console.log("Hello world!");
    $('.feedback-content').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        responsiveClass: true,
        dots:true
    });

});