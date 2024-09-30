let highest = 0;
const prompt = require('prompt-sync')();
Input = prompt("please input how many values you want: ");

let lowest = Input[0];
for (let index = 1; index <=Input; index++){
	great = prompt("please Enter the Value: ");
	if(great > highest) highest = great;
	if(great < lowest) lowest = great;
	
	
}
console.log("highest is ", highest);
console.log("lowest is ", lowest);
