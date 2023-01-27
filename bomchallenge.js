window.addEventListener("load",function(){

text = this.document.querySelector(".input");

let tasks =[];
//console.log(tasks.length);

if(this.window.localStorage.getItem('tasks')){
    console.log("exist");
    tasks = tasks.concat(JSON.parse(window.localStorage.tasks));


text.addEventListener('blur',function(){
    if(!isValidText(text.value))
    {
        text.focus();
        text.select();
    }
});

this.document.querySelector(".add").addEventListener("click",function(){
    if (isValidText(text.value))
    {
        addRow(text);
    }
})
}
function isValidText(value){
    return value.match(/^[a-zA-z]/)
}

function addRow(text){

    let table = document.querySelector("table");

    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.innerHTML='<input type="checkbox" style="cursor:pointer">';
    

    cell1.addEventListener('change',function(){
    cell1.parentElement.querySelector(".addedTask").classList.toggle('throughLine');
    })
    tasks.push(cell1.innerHTML);
    console.log(tasks.length);
    console.log(tasks);

    let cell2 = document.createElement("td");
    cell2.classList.add("addedTask")
    cell2.innerText = text.value;
    tasks.push(cell2.innerText);
    console.log(tasks.length);
    console.log(tasks);

    let cell3 = document.createElement("td");
    cell3.innerHTML ='<img src="download.png" width="30px" style="cursor: pointer">';
    tasks.push(cell3.innerHTML);
    console.log(tasks.length);
    console.log(tasks);

    cell3.addEventListener("click",function(){
        table.removeChild(row);
    })

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    table.appendChild(row);

}
  


//window.localStorage.setItem('tasks', JSON.stringify(tasks));
// this.window.localStorage.removeItem("tasks-lists");


});



// let btn =document.getElementById("btn")
// let count =0;
// btn.addEventListener('click', (e) => {
// //     let count = Number(e.currentTarget.innerText) + 1;
// // e.currentTarget.innerText = count;
//     count +=1;
//     e.currentTarget.innerText = count;
 
// });
