function calculateArea(width,height){
       if(width < 0 || height < 0){
       console.log("Invalid input")
       }
      else{
      area_of_rectangle = width * height
   
      return area_of_rectangle
    }
  }
 
  console.log(calculateArea(4, 3));