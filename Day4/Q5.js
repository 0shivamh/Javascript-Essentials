console.log("#######_Sales Dept_########");
let sale,comm,c_per,total_Cost,productCost=120//cost per product

sale=prompt("Enter your Sales data ");
total_Cost=sale*productCost; 
if(sale>0 && sale<=5000){
  c_per=2;
  comm=c_per/100*total_Cost; 
}
else if(sale>5001 && sale<=10000){
  c_per=5;
  comm=c_per/100*total_Cost;
}
else if(sale>10001 && sale<=20000){
  c_per=7;
  comm=c_per/100*total_Cost;
}
else if(sale>20001){
  c_per=10;
  comm=c_per/100*total_Cost;
}

console.log(
  'Your Total Sale During this year is '+sale+
  ' Total cost of your sale is '+total_Cost+
  ' Your Commision Percentage is '+c_per+
  '% and the reward is '+comm
)