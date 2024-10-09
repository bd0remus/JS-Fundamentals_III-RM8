const addEvents= () => {document.querySelectorAll('.removeButton').forEach((eventButton, i) => {eventButton.addEventListener('click', () => deleteItem(i)) })}

const finishedEvents= () => {document.querySelectorAll("input[type=checkbox]").forEach((checkButton, j) => {checkButton.addEventListener('change', () => strikethrough(j)) })}

function addItem (userInput){
  userInput.preventDefault();
  let ourList = document.querySelector("ul");
  let counter = ourList.children.length+1;

  //create checkbox
  let newCheckbox = document.createElement("input")
  newCheckbox.setAttribute("type","checkbox")
  newCheckbox.setAttribute("id","item"+counter)

  //create remove button
  let newRemoveButton = document.createElement("input")
  newRemoveButton.setAttribute("type","button")
  newRemoveButton.setAttribute("id", counter)
  newRemoveButton.setAttribute("class","removeButton")
  newRemoveButton.setAttribute("value", "trashcan")

  //create list element
  let newLi = document.createElement("li");
  newLi.setAttribute("id", "li"+counter);
  newLi.appendChild(newCheckbox);
  newLi.appendChild(document.createTextNode(this[0].value));
  newLi.appendChild(newRemoveButton);

  //adding list element to unordered list
  ourList.appendChild(newLi);
  addEvents();
}

function deleteItem(id){
  let ourList = document.querySelector("ul");
  ourList.removeChild(ourList.children[id])
  //console.log(ourList.children)
  for (let i = id; i < ourList.children.length; i++){
    let editCheckbox = ourList.querySelector("#item" + (i+2));
    editCheckbox.setAttribute("id", "item" + (i+1))

    let editRemoveButton = ourList.querySelector("#remove" + (i+2));
    editRemoveButton.setAttribute("id", "remove" + (i+1))
  }
  addEvents();
}

function strikethrough(id){
  let ourList = document.querySelector("ul");
  if(ourList.children[id].style.textDecoration ==='line-through') {
    ourList.children[id].style.textDecoration ='none'
  } else {
    ourList.children[id].style.textDecoration ='line-through'
  }
}

addEvents();
finishedEvents();
let form = document.querySelector("form");
form.addEventListener("submit",addItem)


//document.querySelectorAll('.checkbox')
//console.log(document.querySelector("input[type=checkbox]"))


