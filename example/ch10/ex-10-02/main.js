// WeakMap
const SecretHolder = (function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('秘密A');
b.setSecret('秘密B');
console.log(a.getSecret());
console.log(b.getSecret());