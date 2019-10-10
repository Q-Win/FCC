
function truncateString(str, num)
{
  // Clear out that junk in your trunk

var newString = str.slice(0,num)

if (str.length <= num)
  {
    return str
  }
else if (num < 3 )
  {
   str = str.slice(0,num)+"..."
   return str
  }
else
  {
    str = str.slice(0,num-3) +"...";
    return str;
  }
}
