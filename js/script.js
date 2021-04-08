var btn = document.getElementById("theme-button");
var bg = document.getElementById("header");


btn.addEventListener("click", function () { ChangeTheme(); });


function ChangeTheme()
{
    bg.classList.toggle('light');
    btn.classList.toggle('light-btn');
}



