
let display = document.getElementById('display');

let btns = document.querySelectorAll(".btns button");

// console.log(btns)

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i]
  btn.addEventListener("click", function(e){
    
  let  text = e.target.innerText ;
  
  if (text==="AC") {
    
    display.value = "";
  }
  
  else if (text==="=") {
    
    let result = eval(display.value);
    
    display.value = result;
    
  }
  
  
  else{
    
    display.value += text;
    
    
  }
    
  
    
    
  } )
}

