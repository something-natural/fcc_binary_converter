// elements
const inputNum = document.getElementById("number-input");
const covBtn = document.getElementById("convert-btn");
const output = document.getElementById("result");

function print(){
    output.innerText = inputNum.value;
    inputNum.value=""
}


//event listeners
covBtn.addEventListener("click", print);
inputNum.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){        
        print();        
        }
})


