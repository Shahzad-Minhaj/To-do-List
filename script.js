
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
        .map(item => `${item}<button class="bstn" style="margin-left: 10px">Remove</button>`)
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