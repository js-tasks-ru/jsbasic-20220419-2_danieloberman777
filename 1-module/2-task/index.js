/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // не понимаю почему этот вариант не работает
  // Ошибка теста:  ✖ если содержит пробелы, то false

  // if (typeof name === "string") {
  //   return name.trim().length > 3;
  // }
  // return false

  return typeof name === "string" && !name.includes(" ") && name.length > 3;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
