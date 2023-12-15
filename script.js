
let x = [];

function addButton() {
  let inputElement = document.getElementById("addTask");
  let y = String(inputElement.value);

 

  x.push(y);
  inputElement.value = ""; // Clear the input field after pushing the value
  updateOutput();

  document.getElementById("deletebutton").onclick = function(){
    document.getElementById("output").innerHTML= x.pop()
  }
}

function updateOutput() {
    for(let i=0;i<x.length;i++){
  document.getElementById("output").innerHTML = ` ${i+1}: ` + x[i]+ '<button id="deletebutton" style="margin-left: 20px;">Delete</button>';
    
}
}



