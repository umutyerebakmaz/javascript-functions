function sumUp(...toAdd){
  let result = 0;
  
  for(let i = 0; i < toAdd.length; i++){
    result += toAdd[i];
  }
  
  return result;
}

console.log(sumUp(50,30,124));
