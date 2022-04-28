function factorial(n) {
  let i = n;
  let result = 1;
  while (n !== 0) {
    result *= n;
    n--;
  }

  return result;
}

factorial(5);
