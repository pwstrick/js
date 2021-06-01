let attr = "border-radius"; 
function isChrome() {
   return true;
} 
attr = `${isChrome() ? `-webkit-${attr}` : attr}`; 
console.log(attr);          
