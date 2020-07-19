const Stud={
    name:"Shivam",
    age:19,
    projects:{
        dicegame:"Two player dice game using JS"
    }
}
// console.log(Stud);
let {name,age,projects:{dicegame}}=Stud;

console.log(name);
console.log(age);
console.log(dicegame);
