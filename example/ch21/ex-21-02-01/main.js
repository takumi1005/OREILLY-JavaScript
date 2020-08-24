// ディスプリクタを調べる
"use strict";

const obj = { foo: "bar" };
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));
// { value: 'bar', writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj, "foo", { writable: false });
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));
// { value: 'bar', writable: false, enumerable: true, configurable: true }
obj.foo = 3; // TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
