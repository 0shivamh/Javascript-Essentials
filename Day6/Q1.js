
let colors=['gray','yellow','green','lightgreen','skyblue','orange']
let i=0;
function color(){
        let bg=document.getElementById('bd');
        bg.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;      
}
setInterval(color,5000);

