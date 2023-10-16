let spans = document.querySelectorAll(".prog span");
let Section = document.querySelector(".Three");

window.onscroll = function(){
    if (window.scrollY >= Section.offsetTop - 100){
        spans.forEach(function(el){
            el.style.width = el.dataset.goal ;
        });
    }
}