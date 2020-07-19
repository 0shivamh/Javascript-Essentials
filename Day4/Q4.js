function value1(data){
    document.getElementById("ip").value+=data;
}
function ans(){
    let a=document.getElementById("ip").value;
    let b=eval(a);
    document.getElementById("ip").value=b;
}
function can()
{
    document.getElementById("ip").value="";
    
}
function sq(){
    let n1=document.getElementById('ip').value;
    document.getElementById('ip').value=Math.sqrt(Number(n));
    
}

// let p=prompt("enter");
// console.log(Math.sqrt(p))