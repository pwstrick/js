function func(literals, ...substitutions) {
    console.log(literals);
    console.log(substitutions); 
 } 
 var name = "strick", age = 29; 
 func`<p>${name}</p><p>${age}</p>`;
 