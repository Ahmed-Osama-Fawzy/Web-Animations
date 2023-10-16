let Thechars = [0 , 1 ,  2 ,  3 ,  4 , 5 ,  6 , 7 , 8 , 9 , "A" , "B" , "C" , "D", "E" , "F"] ;
let TheColor  = [] ;
for (let i = 0 ; i <6 ; i++ ){
    TheColor.push(Thechars[Math.floor(Math.random() * Thechars.length)]);
};
document.body.append(`#${TheColor.join("")}`);
document.body.style.backgroundColor  = `#${TheColor.join("")}`;