const prompt = require('prompt-sync')();
const userName = "Owolarafe";
let salary = prompt("Please Enter Your Salary: ");
if(salary > 30_000){
	taxRate = 0.2 * salary;
}
else if(salary < 30_000){
	taxRate = (15/100) * salary;
}
console.log("Hello ", userName);
console.log("Your Tax Rate Is: ", taxRate);




