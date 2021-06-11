function animal() {
 this.age = 28;
 setTimeout((() => {
    console.log(this.age); 
 }).call(window), 100);
} 
new animal();