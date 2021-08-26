var num = Math.floor(Math.random()*6)+1;
var num1 = Math.floor(Math.random()*6)+1;

var image = 'dice' + num +".png";
var image1 = 'dice' + num1 + ".png";

document.querySelectorAll('img')[0].setAttribute("src",image);
document.querySelectorAll('img')[1].setAttribute("src",image1);

if(num > num1){
    document.querySelector('h2').innerHTML = "YOU Won😎😎🎇🎆";
}
else if(num < num1){
    document.querySelector('h2').innerHTML = "BOT Won 😎😎🎇🎆";
}else {
    document.querySelector('h2').innerHTML = "DRAW💨🎊🎉✨";
}