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
let tasks = [];
let loop=0;

document.getElementById("btn").onclick= function(){
  let inputElement = document.getElementById("addTask");
  let y = String(inputElement.value);

 

  tasks.push(y);
  inputElement.value = ""; // Clear the input field after pushing the value
  
  document.getElementById("output").innerHTML += `<ul style = "margin: 15px"><li>${tasks[loop]} <button id="deletebutton" style="margin-left: 20px;">Delete</button></li></ul>`
  loop++ 
  
  document.getElementById("deletebutton").onclick = function(){
    document.getElementById("output").innerHTML = ""
  }
  
}

//===================================(practice)======================
//===========(Correct piece of code for Adding 20 students to get the result)
let x=[]
let i=0;
document.getElementById("marksBtn").onclick=function(){

  let y = document.getElementById("addStudentMarks")
  // console.log(typeof(y.value))
  let f = Number(y.value)
  console.log(typeof(f))
  if(f == "string"){ alert("please enter Marks")}
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