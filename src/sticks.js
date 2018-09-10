/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of some number of sticks, return an array containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explination:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr){
  let empty = [];
  let newArr = [];

  newArr = arr;
  if(arr==null){
    return empty;
  }
  else if(arr==undefined){
    return empty;
  }

  
  while (arr.length > 0){
    console.log(arr.length);
    // sort
    arr.sort((a, b) => (a - b) );

    // - loewest
    let cut = arr[0];
    for (let i = 0; i < arr.length; i++){
        arr[i] -= cut;
      
    }
    // Remove the '0'
    let remove = arr.lastIndexOf(0) + 1;
    arr.splice(0, remove);
     newArr.append(Math.max(arr));
  }

   return (console.log(newArr));
  
  //  return (newArr);

  
  

}


module.exports = solution;
