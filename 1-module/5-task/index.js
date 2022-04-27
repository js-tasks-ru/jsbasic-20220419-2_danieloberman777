function truncate(str, maxlength) {
  if (str.length > maxlength && str.length) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}
