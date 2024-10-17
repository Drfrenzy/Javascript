let vowel = ['a', 'e', 'i', 'o', 'u']; 

let givenstring = "hello world";

let counter = 0;

for(let index = 0; index < givenstring.length; index++){

  for(let count = 0; count < vowel.length; count++){
    if(givenstring.charAt(index) == vowel[count]) {
	counter++;		
		}
	}
	
}console.log(counter);

