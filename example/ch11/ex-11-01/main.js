// Errorオブジェクト
function validateEmail(email) { /* メールアドレスを検証する */
  return email.match(/@/) ? email :  /* @が含まれる場合の戻り値 */
    new Error(`無効なメールアドレスです：${email}`);
}

const email = "jane@doe.com";

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error) {
  console.error(validatedEmail.message);
} else {
  console.log(`正しい形式のアドレスです：${validatedEmail}`);
}