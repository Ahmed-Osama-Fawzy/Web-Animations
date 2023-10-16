document.body.style.height = "5000px";
window.onscroll = function (){
    window.scrollY  >= 1000 
    ?document.querySelector("button").style.display = "block" 
    :document.querySelector("button").style.display = "none";      
    document.querySelector("button").onclick = ()=>{
        window.scrollTo({
            top: 0 ,
            behavior: "smooth"
        })
    }
}