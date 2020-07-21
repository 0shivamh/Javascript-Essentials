let no=prompt("Enter any positive no:-");
let i,no_array=[];

for(i=1;i<=no;i++){
    no_array.push(i);
}
console.log(no_array);

let sort=no_array.filter((ele=>ele%2!==0));
console.log("After filtering",sort);

let cube=sort.map((el)=>el*el*el);
console.log("After cubing",cube);