let r1=Math.floor(Math.random()*6)+1;
let r2=Math.floor(Math.random()*6)+1;
console.log(r1);
console.log(r2);
// document.querySelector(".img1").=;
let ri1="images/"+"dice"+r1+".png";
let ri2="images/"+"dice"+r2+".png";
document.querySelector(".img1").src=ri1;
document.querySelector(".img2").src=ri2;


if(r1>r2)
{
    document.querySelector(".H1").textContent="Player 1 won";
}
else if(r1<r2)
{
    document.querySelector(".H1").textContent="Player 2 won";
}
else 
{
    document.querySelector(".H1").textContent="Match draw";
}
