function FindIntersection(strArr) { 
  
  let arr1 = strArr[0].split(',');
  console.log(arr1);
  let arr2 = strArr[1].split(',');
  console.log(arr2)
  let filteredArray = arr1.filter(value => arr2.includes(value));
  
  return filteredArray; 
}
   
console.log(FindIntersection(readline()));
