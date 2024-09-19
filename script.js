// elements
const inputNum = document.getElementById("number-input");
const covBtn = document.getElementById("convert-btn");
const output = document.getElementById("result");
const aniCon = document.getElementById("animation-container");
const animationData = [
    {
      inputVal: 5,
      marginTop: 300,
      addElDelay: 1000,
      msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
      showMsgDelay: 30000,
      removeElDelay: 40000,
    },
    {
      inputVal: 2,
      marginTop: -200,
      addElDelay: 1500,
      msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
      showMsgDelay: 20000,
      removeElDelay: 25000,
    },
    {
      inputVal: 1,
      marginTop: -200,
      addElDelay: 2000,
      msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
      showMsgDelay: 10000,
      removeElDelay: 15000,
    }
  ];
  
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

const runAnimation = () => {
    console.log("wow")
    output.innerText = "Call Stack Animation"
    animationData.forEach((obj) => {
        setTimeout(() => {
            aniCon.innerHTML += `
            <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
                decimalToBinary(${obj.inputVal})
            </p>
            `
        }, obj.addElDelay
        )

        setTimeout(() => {
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay
        )

        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay
        )

        setTimeout(() => {
            output.innerText = convRecurse(5);
        }, 20000
        )
    }

    )
    
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
    } else if ( val === 5){
        runAnimation();
    }else {
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


