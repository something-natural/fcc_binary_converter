// elements
const inputNum = document.getElementById("number-input");
const covBtn = document.getElementById("convert-btn");
const output = document.getElementById("result");

/*
when user input value and click "convert" or press enter
    1. print() call convert(inputNum.value) / done
    2. convet(input) try to parseInt() :
        - a. check if input is null, or including "e", or negative number /done
        - b. if a, return alert("you should enter positive decimal number only") /done
        - c. if not, convert and return result
*/

// return false if value is null or NaN or Negative or including e
function check(value){    
    if ( !value || isNaN(value) || value < 0 ){        
        return false;
    }    
    return true;  
}


// convert by recursive
// input "0" occurs infite loop.... 
// don't forget toString() not toString
const convRecurse = (val) => {
    //console.log("recursive check: ", val.toString())    
    if (val === 0 || val === 1) {
        return val;
    } else {        
        return convRecurse(Math.floor(val / 2)) + (val % 2).toString()
    }
}


// convert using array or recursive function
function convert(){
    //console.log("input number check: ", inputNum.value)
    let val = parseInt(inputNum.value);
    console.log("check input, parse:", inputNum.value, val);
    let result = ""
    if (!check(val) && val !== 0){ // remember 0 is false so you should add val !==0         
        inputNum.value = "";
        output.innerText = "";        
        alert("you should enter positive decimal number only");
        return ;
    } else {
        // covert to binary using array        
        /*
        if ( val === 0 || val === 1){
            result = val.toString();
        } else {
            let resultArr = [];
            while ( val > 0) {
                resultArr.unshift( val % 2);
                val = Math.floor(val / 2)
            }            
            result = resultArr.join("");
        }
        */
        result = convRecurse(val);
        output.innerText = result;                
    }    
}


//event listeners
covBtn.addEventListener("click", convert); // for clicking converter button
inputNum.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){        
        convert();        
        }
}) // for pressing enter key


