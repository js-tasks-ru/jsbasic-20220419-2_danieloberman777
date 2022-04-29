function sumSalary(salaries) {
  let sum = 0;

  for (let i in salaries) {
    if (Number.isInteger(salaries[i])) sum += salaries[i];
  }

  return sum;
}
