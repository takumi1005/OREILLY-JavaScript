// set
const roles  = new Set();

roles.add("ユーザー");
console.log(roles); // Set { 'ユーザー' }

roles.add("管理者");
console.log(roles); // Set { 'ユーザー', '管理者' }

console.log(roles.size); // 2

// 同じものを追加しても何も起こらない
roles.add("ユーザー");
console.log(roles); // Set { 'ユーザー', '管理者' }

// 役割を削除
console.log(roles.delete("管理者")); // true
console.log(roles); // Set { 'ユーザー' }
console.log(roles.delete("管理者")); // false