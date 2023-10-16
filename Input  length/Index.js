let Theinput = document.querySelector("input");
let Thespan = document.querySelector("span");
let Thep = document.querySelector("p");
Thep.innerHTML = Theinput.dataset.length;
Theinput.oninput = function (){
    Thep.innerHTML = Theinput.dataset.length - Theinput.value.length;
    Thespan.style.width = `${((Theinput.value.length)/Theinput.dataset.length)*100}%`
    if (Thep.innerHTML == (Theinput.value.length)*0.2){
        Thep.classList.toggle("Zero");
        Thespan.classList.toggle("ZeroX");
    }
}