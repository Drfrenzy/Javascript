const prompt = require('prompt-sync')();
const accountNumber = prompt("please Enter Your Account Number: ");
let beginningMonthlyBalance = prompt("please Enter Your Balance At The Beginning Of The Month: ");
let totalItemsCharged = prompt("please Enter Total Of All Items Charged By Customer This Month: ");
let totalCreditsApplied = prompt("please Enter Total Credit Applied To Customer Account This Month: ");
const creditLimit = prompt("please Enter Your Credit Limit: ");

let newBalance = beginningMonthlyBalance + totalItemsCharged - totalCreditsApplied;
console.log(newBalance);

if(newBalance > creditLimit){
	console.log("Limit Exceeded");
}
else{console.log("OK");}
