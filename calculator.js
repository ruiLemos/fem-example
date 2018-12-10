let result=0;
let op;
function deleteCharacters(text){
  return text.substr(0,text.length-1);
}
function addition(num1,num2){
  return num1+parseInt(num2);
}
function subtration(num1,num2){
  return num1-parseInt(num2);
}
function multiplication(num1,num2){
  return num1*parseInt(num2);
}
function division(num1,num2){
  return num1/parseInt(num2);
}
function resetDisplay(){
  document.querySelector(".display").innerText='0';
}
function handleClick(buttonClicked){
  const regExpression = /[1-9]/g;
  let displayString = document.querySelector(".display").innerText;
  if(buttonClicked.match(regExpression)!=null){
    if(displayString==='0'){
      document.querySelector(".display").innerText=buttonClicked;      
    }else{
      document.querySelector(".display").innerText+=buttonClicked;
    }
  }else if(buttonClicked==='C'){
    document.querySelector(".display").innerText='0'
    result=0;
  }else if(buttonClicked==="←"){
    document.querySelector(".display").innerText=deleteCharacters(displayString);
  }else if(buttonClicked==='-'){
    resetDisplay();
    op=subtration;
  }else if(buttonClicked==='+'){
    resetDisplay();
    op=addition;
  }else if(buttonClicked==='x'){
    resetDisplay();
    op=multiplication;
  }else if(buttonClicked==='÷'){
    resetDisplay();
    op=division;
  }else if(buttonClicked==='='){
    result=op(result,displayString);
    document.querySelector(".display").innerText=result;
  }
}

function init() {
    document.querySelector(".calculator").addEventListener("click", function(event) {
      handleClick(event.target.innerText);
    });
  }
  
  init();
  