---
path: another-test
date: 2020-05-20T20:54:49.934Z
title: "embedding test "
description: rud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Exce
---
this is code 

### **this is more code**

```js
function largestNum(arr){
  //  largest array created to hold the four sub arrays
    let largest = [0,0,0,0];
  
  // first FOR loop, loops through (iterates) the arrays starting at index 0 (the first array)
    for(var i = 0; i < arr.length; i++) {
      
 // second FOR loop iterates through the sub-arrays     
        for(var j = 0; j < arr[i].length; j++){
          
          
            if(arr[i][j] > largest[i]){
              
                largest[i] = arr[i][j];
              
            }
        }
    }
  
    return largest;
}

  //largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  //largest = [5, 27, 39, 1001]
```