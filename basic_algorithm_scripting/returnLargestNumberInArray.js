function largestOfFour(arr) {
  var finalArray =[];
  var n = 0;

  while (arr.length>n)
  {
    var m = 0;
    var biggestPiece = arr[n][m];
    while(arr[n].length>m)
    {
      if (arr[n][m]>biggestPiece)
      {
        biggestPiece = arr[n][m];

      }
      else
      {

      }
      m++
    }
    finalArray.push(biggestPiece);
    n++;
  }

  return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
