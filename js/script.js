var btn = document.getElementById("theme-button");
var logo = document.getElementById("logo");
var bg = document.getElementById("header");
var list = document.getElementById("menu__link");
var preview = document.getElementById("preview-prew");
var holder = document.getElementById('holder');




btn.addEventListener("click", function () { ChangeTheme(); });


function ChangeTheme()
{
    bg.classList.toggle('light');
    btn.classList.toggle('light-btn');
    list.classList.toggle('link-light');
    logo.classList.toggle('light-logo');
    preview.classList.toggle('light-prev');
    holder.classList.toggle('light-prev-text');
}



