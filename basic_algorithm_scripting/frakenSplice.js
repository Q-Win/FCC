function frankenSplice(arr1, arr2, n) {
  let finalArray = arr2.slice(0,-1);
  let insertArray = arr1.slice(0, arr1.length);
  finalArray.splice(n, 0, ...insertArray);

return finalArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
