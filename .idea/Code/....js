document.addEventListener("DOMContentLoaded", function () {
    pTag = document.querySelector("div");
    newVal = document.createElement("p");
    newVal.innerHTML = '';
    pTag.appendChild(newVal);
    var timer = 0;
    $("#set").click(function(e){
        e.preventDefault();
        setResetInterval(true);
    });
});
// Async Tests Example
/*
window.onModulesLoaded = new Promise( function( resolve, reject ) {
  setTimeout(function() {
    pTag = document.querySelector("div");
    pTag.innerHTML = '';
    newVal = document.createElement("p");
    newVal.innerHTML = 'Hello World';
    pTag.appendChild(newVal);
    resolve();
  }, 100)
});
*/