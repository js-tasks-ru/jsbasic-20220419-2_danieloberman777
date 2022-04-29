let calculator = {
  read(a, b) {
    this.a = String(a);
    this.b = String(b);
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return Number(this.a) * Number(this.b);
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
