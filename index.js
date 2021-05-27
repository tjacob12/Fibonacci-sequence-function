function fibsequence(num) {
    var x = 1, y = 0, z;

  while (num >= 0){
    z = x;
    x = x + y;
    y = z;
    num--;
  }

  return y;
}