function repeatStringNumTimes (str, num) {
    // write your code here
    if(num <=0){
      return "";
    } else {
      let repeatedString= "";
      for(let i=1;i<=num ;i++){
        repeatedString += str;
    } 
    return repeatedString;
   }
  }
  
repeatStringNumTimes