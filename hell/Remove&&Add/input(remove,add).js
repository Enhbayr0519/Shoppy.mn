let input = document.getElementById("input");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let newInput = document.querySelector(".newInput");
let header = document.querySelector(".header"); 


document.addEventListener('click', (e) => {
   if(e.target.id === "add"){
       newInput.innerHTML += `
       <div class="header">
            <input id="input" autocomplete="off" autofocus type="text" placeholder="Write a text...">
            <button id="add">Add</button>
            <button id="remove ">Remove</button>
        </div>`
   } 
   

})


document.addEventListener('click' , (e) => {
        if(e.target.id !== "remove"){
            e.target.parentElement.remove()
        } 
    }
)