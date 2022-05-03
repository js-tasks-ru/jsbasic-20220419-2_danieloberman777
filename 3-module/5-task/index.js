function getMinMax(str) {
  const splitStr = str.split(" ").filter((item) => Number(item));

  return {
    min: Math.min.apply(null, splitStr),
    max: Math.max.apply(null, splitStr),
  };
}
