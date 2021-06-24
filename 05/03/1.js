function load() {
  return new Promise(function(resolve, reject) {
    resolve("success");
  }); 
} 

(async function() {
  var result = await load();
  console.log(result);
 })();
 