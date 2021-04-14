var btn = document.getElementById("theme-button");
var logo = document.getElementById("logo");
var bg = document.getElementById("header");
var list = document.getElementById("menu__link");
var preview = document.getElementById("preview-prew");
var holder = document.getElementById('holder');


btn.addEventListener("click", function () { ChangeTheme(); });


function ChangeTheme() {

    bg.classList.toggle('light');
    btn.classList.toggle('light-btn');
    list.classList.toggle('link-light');
    logo.classList.toggle('light-logo');
    preview.classList.toggle('light-prev');
    holder.classList.toggle('light-prev-text');
}

//Burger//


$(document).ready(function () {
    $('.menu__icon').click(function (event) {
        $('.menu__icon, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

//===============works========///

let hover = document.getElementById("hover1");



// This handler will be executed only once when the cursor
// moves over the unordered list
let test = document.getElementById("work1");
test.onmouseover = logMouseOver;

function logMouseOver() {
    hover.classList.add('hover-display');
}


//=============work2===============//

let hover2 = document.getElementById("hover2");



// This handler will be executed only once when the cursor
// moves over the unordered list
let test2 = document.getElementById("work2");
test2.onmouseover = logMouseOver2;

function logMouseOver2() {
    hover2.classList.add('hover-display2');
}


//=============work3===============//

let hover3 = document.getElementById("hover3");



// This handler will be executed only once when the cursor
// moves over the unordered list
let test3 = document.getElementById("work3");
test3.onmouseover = logMouseOver3;

function logMouseOver3() {
    hover3.classList.add('hover-display3');
}




let hover4 = document.getElementById("hover4");



// This handler will be executed only once when the cursor
// moves over the unordered list
let test4 = document.getElementById("work4");
test4.onmouseover = logMouseOver4;

function logMouseOver4() {
    hover4.classList.add('hover-display4');
}
document.getElementById("mybutton").click();


//========================react===============================//
$(document).ready(function(){
    $(".btn1").focus();
    $(".btn1").click(function(){

      $(".react-react").slideUp();
    });
    $(".btn2").click(function(){
      $(".react-react").slideDown();
    });
  });

 

  //========================slider=================================//

  var swiper = new Swiper('.swiper-container', {
 
    pagination: {
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
    }
  });


let hover5 = document.getElementById("mac");
let test5 = document.getElementById("skills");
test5.onmouseover = logMouseOver5;

function logMouseOver5() {
    hover5.classList.add('hover-skills');

}