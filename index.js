var num = Math.floor(Math.random()*6)+1;
var num1 = Math.floor(Math.random()*6)+1;

var image = 'dice' + num +".png";
var image1 = 'dice' + num1 + ".png";

document.querySelectorAll('img')[0].setAttribute("src",image);
document.querySelectorAll('img')[1].setAttribute("src",image1);

if(num > num1){
    document.querySelector('h2').innerHTML = "YOU Wonππππ";
}
else if(num < num1){
    document.querySelector('h2').innerHTML = "BOT Won ππππ";
}else {
    document.querySelector('h2').innerHTML = "DRAWπ¨ππβ¨";
}