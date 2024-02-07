//======================(original code for to-dolist)==============================
// let tasks = [];

// document.getElementById("btn").onclick = function() {
//   let inputElement = document.getElementById("addTask");
//   let y = String(inputElement.value);

 

//   tasks.push(y);
//   inputElement.value = ""; // Clear the input field after pushing the value
//   updateOutput();

//   document.getElementById("deletebutton").onclick = function(){
//     document.getElementById("output").innerHTML= tasks
//   }
// }

// function updateOutput() {
//     for(let i=0;i<x.length;i++){
//   document.getElementById("output").innerHTML = ` ${i+1}: ` + tasks[i]+ '<button id="deletebutton" style="margin-left: 20px;">Delete</button>';
    
// }
// }
//========================(practice for to do list)=============
// let tasks = [];
// let loop=0;

// document.getElementById("btn").onclick= function(){
//   let inputElement = document.getElementById("addTask");
//   let y = String(inputElement.value);

 

//   tasks.push(y);
//   inputElement.value = ""; // Clear the input field after pushing the value
  
//   document.getElementById("output").innerHTML += `<ul style = "margin: 15px"><li>${tasks[loop]} <button id="deletebutton" style="margin-left: 20px;">Delete</button></li></ul>`
//   loop++ 
  
//   document.getElementById("deletebutton").onclick = function(){
//     document.getElementById("output").innerHTML = ""
//   }
  
// }

//-------------------------
// let tasks = [];


// document.querySelector(".btn").onclick= function(){
//   let inputElement = document.querySelector(".addTask");
//   let y = String(inputElement.value);

//   if(inputElement.value == ""){
//     alert("please enter something")
//     tasks.pop();
//   document.querySelector(".output").innerHTML = tasks.join("<br>") + "<br>"
//   return

//    }
  
//   tasks.push(y);
//   // inputElement.value = ""; // Clear the input field after pushing the value
//   document.querySelector(".addTask").value = ""
// document.querySelector(".output").innerHTML += y +'<button class="bstn">Remove</button>'+"<br>"
// console.log(document.querySelector(".output").innerHTML)
// document.querySelector(".bstn").onclick =function(){
 
//       let removedElement = tasks.slice(tasks.length);
//       document.querySelector(".output").innerHTML = tasks.join("<br>")

// }

// }
// document.querySelector(".delStart").onclick = function () {
//   if (tasks.length > 0) {
//       let removedElement = tasks.shift();
//       document.querySelector(".output").innerHTML = tasks.join("<br>");
//       console.log("Removed from start:", removedElement, tasks);
//       console.log(document.querySelector(".output").innerHTML)

//   } else {
//       // document.querySelector(".output").innerHTML = memory.join("<br>") + "<br>"
//       console.log("Array is empty", tasks);
//   }
// }

// document.querySelector(".delEnd").onclick = function () {
//   if (tasks.length > 0) {
//       let removedElement = tasks.pop();
//       document.querySelector(".output").innerHTML = tasks.join("<br>");
//       console.log("Removed from end:", removedElement);
//   } else {
//       // document.querySelector(".output").innerHTML = memory.join("<br>") + "<br>"

//       console.log("Array is empty");
//   }
// }
let memory = [];

document.querySelector(".addButtons").addEventListener("click", function(event) {
    if (event.target.classList.contains("bstn")) {
        // Handle button click
        let buttonIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
        memory.splice(buttonIndex, 1);
        updateOutput();
    } else {
        // Handle add button click
        let input = document.querySelector(".add");
        let insertingY = String(input.value);

        if (insertingY === "") {
            alert("Please enter something");
            return;
        }

        memory.push(insertingY);
        input.value = "";
        updateOutput();
    }
});

document.querySelector(".delEnd").addEventListener("click", function() {
    if (memory.length > 0) {
        memory.pop();
        updateOutput();
    } else {
        console.log("Array is empty");
    }
});

document.querySelector(".delStart").addEventListener("click", function() {
    if (memory.length > 0) {
        memory.shift();
        updateOutput();
    } else {
        console.log("Array is empty");
    }
});

function updateOutput() {
    let output = document.querySelector(".output");
    output.innerHTML = memory
        .map(item => `<button class="bstn btn btn-outline-warning" style="margin: 10px">Remove</button>${item}`)
        .join("<br>");

    let buttons = output.querySelectorAll(".bstn");
    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            memory.splice(index, 1);
            updateOutput();
        });
    });
}

//===================================(practice)======================
//===========(Correct piece of code for Adding 20 students to get the result)
let x=[]
let i=0;
document.getElementById("marksBtn").onclick=function(){

  let y = document.getElementById("addStudentMarks")
  console.log
  // if(typeof(y.value) == "string"){ alert("please enter Marks")}
  // else
  x.push(y.value)
  y.value= "";
  
  
  if(x[i]<50){
    document.getElementById("output2").innerHTML += ` Student: ${i+1} got ${x[i]} Marks, Status: <b>Fail</b> Grade: <b>F</b><br>`
    i++
  }

  else if(x[i]>=50 && x[i] <60 ){
    document.getElementById("output2").innerHTML += ` Student: ${i+1} got ${x[i]} Marks, Status: <b>PASS</b> Grade: <b>C-</b><br>`
    i++
  }

  else if(x[i]>=60 && x[i] <70 ){
    document.getElementById("output2").innerHTML += ` Student: ${i+1} got ${x[i]} Marks, Status: <b>PASS</b> Grade: <b>C+</b><br>`
    i++
  }

  else if(x[i]>=70 && x[i] <80 ){
    document.getElementById("output2").innerHTML += ` Student: ${i+1} got ${x[i]} Marks, Status: <b>PASS</b> Grade: <b>B</b><br>`
    i++
  }
  
  else if(x[i]>=80 ){
    document.getElementById("output2").innerHTML += ` Student: ${i+1} got ${x[i]} Marks, Status: <b>PASS</b> Grade: <b>A</b><br>`
    i++
  }


}