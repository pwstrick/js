function animal() {
 this.age = 28;
 setTimeout(() => {
   console.log(this.age); 
 }, 100); 
} 
new animal();
