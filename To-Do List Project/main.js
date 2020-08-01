let list=document.getElementById("item");
const cc=document.getElementById("btn");
let list_btn=document.getElementById("delete");
                 

cc.onclick=function() {
     let input=document.getElementById('Item_title').value;
    if(input==""){
        alert("to do item should not be empty");
    }
    else{
        console.log(input)
        let text = document.createTextNode(input);
        console.log("text");
        let Task = document.createElement('li');
        var btn1 = document.createElement("BUTTON");   
        btn1.innerHTML = "X"; 
        Task.appendChild(text);
        let ll=list.appendChild(Task);
        ll.appendChild(btn1); 
        
        btn1.onclick=function(){
            list.removeChild(Task);
        }
        document.getElementById('Item_title').value = '';//clear previus input value

           
    } 
  
}
document.getElementById('save').onclick=function(){
    // window.print();
    let newvar=[];
    let List_a= document.getElementById('item').innerText;
    let arr = List_a.split('\n');
    console.log(arr);
    let newarr = arr.filter(a => a !== 'X');
    localStorage.setItem("Save_List", JSON.stringify(newarr)); 
    alert("To Do list is saved")
    
}

document.body.onload=function(){
    let orderl=document.getElementById("item");
    let data1 = JSON.parse(localStorage.getItem('Save_List'));
    console.log(data1);
    if (data1!=""){
        for(i in data1){
        
            let li = document.createElement('li')
            let node = document.createTextNode(data1[i]);
            
            console.log(node);
            li.appendChild(node);
            orderl.appendChild(li);
        }
    }
}
document.getElementById('clear').onclick=function(){
    localStorage.clear();
    location.reload();
    alert("Todo list is Clear");
}