export default class FieldStorage {
  constructor(field) {
    this.field = field;
    this.key = this.field.getAttribute('name');
    this.field.addEventListener('blur', () => this.addValueToLocalStorage());
    this.getValueFromLocalStorage();
  }

  addValueToLocalStorage() {
    const { value } = this.field;
    localStorage.setItem(this.key, value);
  }

  getValueFromLocalStorage() {
    if (!localStorage.getItem(this.key)) return;
    this.field.value = localStorage.getItem(this.key);
  }
}
