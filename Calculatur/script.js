const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deletButton = document.querySelector('[data-delet]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousButton = document.querySelector('[data-previous-operand]');
const currentButton = document.querySelector('[data-current-operand]');

numberButtons.forEach(function(item){
    item.addEventListener("click", function(){
        currentButton.textContent+=item.textContent;
    })

    
    
});

allClearButton.addEventListener("click", function(){
    currentButton.textContent="";
    first = "";
    second = "";
    oper = "";
})

deletButton.addEventListener("click",function(){
    var characterLength = currentButton.textContent.length-1;
    var newTextContent = currentButton.textContent.slice(0,characterLength);
    
    currentButton.textContent=newTextContent;
})



let first;
let oper;
operatorButtons.forEach(function(item){
    item.addEventListener("click", function(){
        first = currentButton.textContent;
        oper = item.textContent;


        console.log(first);
        console.log(oper);
        
        currentButton.textContent="";
    });
});


let second;
equalsButton.addEventListener("click", function(){
    second = currentButton.textContent;
    var newFirst = Number(first);
    var newSecond = Number(second);



        if(oper == "+"){
        currentButton.textContent= newFirst + newSecond;
        }
        else if(oper == "-"){
        currentButton.textContent= newFirst - newSecond;
        }
        else if(oper == "÷"){
        currentButton.textContent= newFirst / newSecond;
        }
        else if(oper == "*"){
        currentButton.textContent= newFirst * newSecond;
        }
// 


    
})
