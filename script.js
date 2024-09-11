// elements
const inputNum = document.getElementById("number-input");
const covBtn = document.getElementById("convert-btn");
const output = document.getElementById("result");

/*
when user input value and click "convert" or press enter
    1. print() call convert(inputNum.value) / done
    2. convet(input) try to parseInt() :
        - a. check if input is null, or including "e", or negative number
        - b. if a, return alert("you should enter positive decimal number only")
        - c. if not, convert and return result
*/

function check(value){    
    if ( !value || isNaN(value) || value < 0 || value.toString() !== inputNum.value){        
        return false;
    }    
    return true;  
}


function convert(){
    const val = parseInt(inputNum.value);
    if (!check(val)){
        inputNum.value = "";
        output.innerText = "";        
        alert("you should enter positive decimal number only");
        return ;
    } else {
        output.innerText = val;
        inputNum.value=""
    }    
}


//event listeners
covBtn.addEventListener("click", convert); // for clicking converter button
inputNum.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){        
        convert();        
        }
}) // for pressing enter key


