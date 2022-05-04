function camelize(str) {
  let splitedWord1 = str.split("-");

  return splitedWord1
    .map((item, key) => {
      if (key !== 0) {
        console.log(item[0]);
        return item[0].toUpperCase() + item.slice(1);
      }
      return item;
    })
    .join("");
}
