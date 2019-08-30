function findLongestWordLength(str)
{
  //turns the string into an array so the indvidual words of the string can be compared
  var arraySplitz = str.split(" ");
  //counter, used to move through array
  var m=1;
  //setting a string variable that will be a place holder for the longest string
  var longestWord = arraySplitz[0];

  //A while loop that will go through the entire array
  while(m<arraySplitz.length)
  {
    var lengthOfChallenger = arraySplitz[m].length;

    var lengthOfChamp = longestWord.length;
    if(lengthOfChallenger>lengthOfChamp)
      {

        longestWord = arraySplitz[m];
      }
    else
      {

      }

    m++;

  }
  return longestWord.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
