let factorial_number = 10
let factorial_length = 1;
while (factorial_number > 1){
	newnumber = factorial_number--;
	factorial_length *= newnumber
        if(factorial_length > 1000){
        console.log("factorial greater than 1000, please try again")
        break;
          }
   console.log(factorial_length);    
}
 