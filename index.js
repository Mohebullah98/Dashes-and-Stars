function StringChallenge(num) { 

  // code goes here
  let result="";  
  num = num.toString();
  for(let i=1;i<num.length;i++){
    if(num.charAt(i)==0|| num.charAt(i-1)==0) continue;
    if(num.charAt(i)%2===1 && num.charAt(i-1)%2===1) num=num.slice(0,i) +"-"+num.slice(i);
    if(num.charAt(i)%2===0 && num.charAt(i-1)%2===0) num=num.slice(0,i) +"*"+num.slice(i);
  }
  return num; 

}
   
// keep this function call here 
console.log(StringChallenge(readline()));
