'use strict';
const sentences = [
  { subject: 'JavaScript', verd: 'is', object: 'great'},
  { subject: 'Elephants', verd: 'are', object: 'large'},
];

function say({ subject, verd, object}) {
  console.log(`${subject} ${verd} ${object}`);
}

for(let s of sentences) {
  say(s);
}