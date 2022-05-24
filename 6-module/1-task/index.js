/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;

    this.elem = `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
      ${this.rows
        .map(
          (item) =>
            `<tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button>X</button></td>
        </tr>`
        )
        .join(" ")}
    </tbody>
  `;
    const parent = document.createElement("table");
    parent.innerHTML = this.elem;
    this.elem = parent;
    const tbody = this.elem.querySelector("tbody");
    tbody.querySelectorAll("tr").forEach((row) => {
      const removeBtn = row.querySelector("button");

      removeBtn.addEventListener("click", () => row.remove());
    });
  }
}
