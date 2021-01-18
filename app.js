var btnMain = document.querySelector("#btn-Main")
var txtarea = document.querySelector("#text-area")
var result = document.querySelector("#output")

function clickHandler() {
    result.innerText=txtarea.value
};

btnMain.addEventListener("click", clickHandler)
