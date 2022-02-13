
var toastType = {
    Success : 1,
    Error : 2
}

let listgrp = document.querySelector(".list-group");
let itemsArray = localStorage.getItem("listItem") ? JSON.parse(localStorage.getItem("listItem")) : [];
var toastLiveExample = document.querySelector('.liveToast');

FillItems(false); 

let listitem = document.querySelectorAll(".todoText");

listitem.forEach(item => {
    item.addEventListener('click', event => {
        item.parentElement.classList.toggle("selectListItem");
    })
  })



let addTodoList = document.querySelector("#button-addon2");
addTodoList.addEventListener('click', event => {
    let addTodoText = document.querySelector(".todoTextInput").value;
    if(addTodoText == "")
    {
        showToast("todo can not be empty",toastType.Error);
        return;
    }
    else
    if(itemsArray.filter(w=>w.indexOf(addTodoText) != -1).length > 0)
    {
        showToast("this list of elements is available",toastType.Error);
        return;
    }

    itemsArray.push(addTodoText);
    document.querySelector(".todoTextInput").value = "";
    FillItems(false);   
    showToast("item added",toastType.Success);

 })

function FillItems(isRemoveLocalStorage)
{
    if(isRemoveLocalStorage)
    {    itemsArray = [];
         localStorage.clear();
    }

   while (listgrp.firstChild) {
        listgrp.removeChild(listgrp.firstChild);
    }
    
    localStorage.setItem("listItem",JSON.stringify(itemsArray));
    itemsArray.forEach(function(item,index) {
        const li = document.createElement('li');
        li.innerHTML= `<div  class="float-start todoText"> ${item}</div>
                       <div  class="float-end closeicon" onclick="removeItem(this)" >X</div>`;
        li.classList.add("list-group-item");
        if(index % 2 == 0)
            li.classList.add("list-group-item-secondary");
        listgrp.appendChild(li);
    });

}

function removeItem(item)
{
    let text = item.parentElement.querySelector(".todoText").innerText;
    itemsArray = itemsArray.filter(w=>w.indexOf(text) == -1);
    FillItems(false);   
    showToast("item deleted",toastType.Success);

}


function showToast(message,type)
{   
    document.querySelector(".rectColor").setAttribute("fill",type == toastType.Success ? "#007aff" : "#8B0000")
    document.querySelector(".toast").classList.value="toast fade show";
    document.querySelector(".toast-body").innerText = message;
}

