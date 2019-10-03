
function confirmEnding(str, target)

{
  var A = str.length - target.length;
  //console.log(A)
  var isThisTheSameAsTarget = str.substring(A,str.length);
  //console.log(isThisTheSameAsTarget)
  var lengthOfString = str.length-1;
  //console.log(target)
  //console.log(str[lengthOfString])
  if (target === isThisTheSameAsTarget )

    {
      return true
    }
  else
  {
    return false
  }
  // "Never give up and good luck will find you."
  // -- Falcor
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "frozen");














}
