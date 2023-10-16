let  Nums = document.querySelectorAll("span");
let  Section = document.querySelectorAll("div")[2];
let  Stop = false ;
window.onscroll = function (){
    if (window.scrollY >= Section.offsetTop && window.scrollY <= Section.offsetTop+Section.clientHeight ){
        if(!Stop){
            Nums.forEach((Num) => Count(Num));
        }
        Stop = true; 
    }
}

function Count(el){
    let goal = el.dataset.goal ;
    let Increase = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(Increase);
        }
    } , 10)
}