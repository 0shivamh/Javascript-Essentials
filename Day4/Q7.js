let n,i,cc=0;
n=prompt("Enter the number:");
for (i=2;i<=n/2;i++){
    if(n%i==0){
        cc=1;
        break;
        }       
}
if(n==1){
    alert("1 is neither prime or composite");
}
else if(cc==0){
    alert(n+" is prime no");
}
else{
    alert(n+" is not prime no");
}