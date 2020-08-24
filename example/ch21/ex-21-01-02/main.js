// ゲッターとセッター
const USER_EMAIL = Symbol();
class User {
  set email(value) {
    // セッター
    if (!/@/.test(value)) throw new Error(`不正なアドレス: ${value}`);
    this[USER_EMAIL] = value;
  }
  get email() {
    // ゲッター
    return this[USER_EMAIL];
  }
}

const u = new User();
u.email = "john@doe.com";
console.log(`email: ${u.email}`);
