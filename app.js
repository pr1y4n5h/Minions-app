var btnMain = document.querySelector("#btn-Main")
var txtarea = document.querySelector("#text-area")
var result = document.querySelector("#output")

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translate(text){
    return url + "?" + "text=" + text
}

function clickHandler() {
    var input = txtarea.value;
    fetch(translate(input))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
};

btnMain.addEventListener("click", clickHandler)
