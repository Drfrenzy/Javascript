const prompt = require('prompt-sync')();
userInput = prompt("please Enter the base of the triangle: ");
for(let count=0; count <= userInput; count++){
	for(let counter = 0; counter <= count; counter++){
		process.stdout.write("*");
	}
console.log();
}
