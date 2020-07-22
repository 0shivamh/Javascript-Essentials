
let ctime=document.getElementById('tt');
let nm=document.getElementById('name');
let dark=document.getElementById('btn');
// let dtext=document.getElementById('darkmode');

function clock()
{
    let date=new Date();
    let time=date.toLocaleTimeString();
    ctime.innerText=time;
}
setInterval(clock,1000);

let nam=prompt("Enter your name");
console.log(nam);
nm.innerHTML="Welcome "+nam+" the world of coders";


dark.onclick=function(){
if(dark.innerText=="Switch Back to light mode"){
        document.body.style.backgroundColor='white';
        document.body.style.color='black';   
        dark.innerHTML="Switch to Dark mode";
    }
    else{
        document.body.style.backgroundColor='#2C3335';
        document.body.style.color='white';
        dark.innerHTML="Switch Back to light mode";
    }
}