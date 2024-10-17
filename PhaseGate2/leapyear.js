function isLeapYear(year){
   
    let leapyear;
 if((year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))){
     leapyear = "True";
         } 
    else {
     leapyear = "False";  
   }
     return leapyear;

}
console.log("is the inputted year a leap year: ", isLeapYear(2022))