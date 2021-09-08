// Given two arrays that are sorted, merge the two arrays into one big array
function mergeSortedArrays(arr1, arr2){
  if (!Array.isArray(arr1) || !(Array.isArray(arr2))) {
    return "Two arrays are needed as inputs";
  } if (arr2.length === 0) {
    return arr1;
  } if (arr1.length === 0) {
    return arr2;
  }

  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    newArray.push(arr2[j]);
  }
  function compare(a, b){
    return(a - b);
  }
  return newArray.sort(compare);
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);