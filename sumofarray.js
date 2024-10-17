function sumofarray(sumarray) {
  let sum_array = 0;
  for (let index = 0; index < sumarray.length; index++) {
    sum_array += sumarray[index]
  }

  return sum_array;

 }

 console.log("sum of the array is: ", sumofarray([6, 45, 344, 24]))