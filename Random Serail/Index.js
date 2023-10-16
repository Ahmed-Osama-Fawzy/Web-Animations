let chars = [1,2,3,4,5,6,7,8,9,0,"a","s","f","g","h","j","k","l"];
let serial = [];
for(let i=0 ; i < 10 ; i++){
    serial.push(chars[Math.floor(Math.random() * chars.length)]);
};

document.body.append(serial.join(""));