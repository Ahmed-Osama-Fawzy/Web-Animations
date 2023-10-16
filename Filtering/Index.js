let LI = document.querySelectorAll("li");
let Divs = document.querySelectorAll("div");
LI.forEach((li)  => {
    li.addEventListener("click" , ()=>{
        Divs.forEach((div)=>{
            div.dataset.type == li.dataset.type ? div.style.display = "block" : div.style.display = "none";
        });
    });
});
