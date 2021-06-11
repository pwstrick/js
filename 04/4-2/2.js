function people() {
 var self = this;
 this.age = 28;
 setTimeout(function() {
   console.log(this.age); 
   console.log(self.age); 
 }, 100); 
} 
new people();
