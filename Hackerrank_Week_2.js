//LONELY INTEGER

function lonelyinteger(a) {
    let unique = a.filter(function(value){
      return a.indexOf(value) === a.lastIndexOf(value)
    })
    
    return unique[0];
}

//GRADING STUDENTS

function gradingStudents(grades) {
  let finalGrades = grades.map((grade) => { 
    return grade >= 38 && grade % 5 >= 3  ? grade - (grade % 5) + 5: grade;         
  }); 
return finalGrades;

}

//FLIPPING BITS

function flippingBits(n) {
  let lowBin = ''
  let highBin= ''
  let result = 0

while (n >= 1) {
  const rem = n % 2
  lowBin += rem
  rem === 1 ?
    n = Math.floor(n / 2) :
      n /= 2
}

while (lowBin.length < 32) {
  lowBin += 0
}

for (let i = lowBin.length - 1; i >= 0; i--) {
  highBin += lowBin[i] === '0' ? '1' : '0'
}

for (let i = 0; i < highBin.length; i++) {
  const expo = highBin.length - 1 - i
  result += highBin[i] * (2 ** expo)
}  
return result

}

//DIAGONAL DIFFERENCE

function diagonalDifference(arr) {
  var n = arr.length; 
  var d1 = 0;
  var d2 = 0;  

for(var i=0; i<n; i++){    
  
  for(var j=0; j<n; j++){
      if(i === j) {
          d1 += arr[i][j];
      }
      if(i + j === n - 1){
          d2 += arr[i][j];
      }      
  
  }  

}

return Math.abs(d1 - d2);

}

//COUNTING SORT 1

function countingSort(arr) {
  let result = new Array(100).fill(0);
  for(let num of arr){
      result[num]++
  }
  return result;

}

//COUNTING VALLEYS

function countingValleys(steps, path) {
  let strArr = path.split('')
  let count = 0
  let result = 0
  for(let step=0; step<steps; step++){
      if(count == 0 && strArr[step].toLowerCase() == 'd'){
          count -= 1
          result += 1
      } else if(strArr[step].toLowerCase() == 'd'){
          count -= 1
      } else {
          count += 1
      }
  }
  return result

}

//PANGRAMS

function pangrams(s) {
  return Array.from(

 new Set(
     s.replace(/\s/g, "")

     .split("")

     .map(c => c.toLowerCase())

 )

).length === 26

 ? "pangram"

 : "not pangram"

}

//MARS EXPLORATION

function marsExploration(s) {
  let sosCount = s.length/3;
  let original = "SOS".repeat(sosCount);
  let errorCount = 0;

  for(let i = 0; i < s.length; i++){
      if(s[i] != original[i]){
          errorCount++;
      }
  }

  return errorCount;

}


