({ a: e, a: f } = { b: 5, a: 6 }); 
console.log(e, f); 

var obj = { preName: "strick" },
 attr = "Name"; 
({ ["pre" + attr]: value } = obj); 
console.log(value); 