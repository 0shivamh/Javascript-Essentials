let no;
no=prompt("Enter the number? ");
check(no);
function check(no){
    if(no%2==0)
    {
        console.log("The given num is "+no+" and num is even");
    }
    else{
        console.log("The given num is "+no+" and num is odd");
    }
}