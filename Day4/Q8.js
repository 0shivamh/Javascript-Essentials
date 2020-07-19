ask=(qe,yes,no)=>(confirm(qe)) ? yes(): no();

ask("Do you agree?",()=>{ alert("You agreed.");},
()=> {alert("You cancelled");})