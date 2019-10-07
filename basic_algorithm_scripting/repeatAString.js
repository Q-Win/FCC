
function repeatStringNumTimes(str, num)
{
  // repeat after me
var dog = str;

if (num<0)
  {
    return "";
  }

else
{
var n = 1;
while (n<num)
{
  dog = dog + str;
  n++;
}

}

  return dog;
}

repeatStringNumTimes("abc", 3);
