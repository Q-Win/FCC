function factorialize(num) {
  if (num <=0)
  {
  return 1;
  }
  else
  {
  var n =num;
    while(n>1)
    {
    n--;
    num = num*n;

    }

    return num;
  }
}

factorialize(5);
