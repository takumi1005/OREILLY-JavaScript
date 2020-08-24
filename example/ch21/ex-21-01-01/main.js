// シンボルを生成してメールアドレスを記憶するためのプロパティ
const USER_EMAIL = Symbol();
class User {
  setEmail(value) {
    if (!/@/.test(value)) throw new Error(`不正なアドレス: ${value}`);
    this[USER_EMAIL] = value;
  }
  getEmail() {
    return this[USER_EMAIL];
  }
}

const u = new User();
u.setEmail("john@doe.com");
console.log(`email: ${u.getEmail()}`); // email: john@doe.com
