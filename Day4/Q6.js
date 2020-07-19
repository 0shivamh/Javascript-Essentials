let no;
no=prompt("Enter the number");
while(no==true){
    let res=no>=100 || no==null ? no=false: ask(); 
    function ask(){
    no=prompt("The number should be grater than 100: ")
}
}
