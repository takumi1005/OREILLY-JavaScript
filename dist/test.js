'use strict';

var sentences = [{
  subject: 'JavaScript',
  verd: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verd: 'are',
  object: 'large'
}];

function say(_ref) {
  var subject = _ref.subject,
      verd = _ref.verd,
      object = _ref.object;
  console.log("".concat(subject, " ").concat(verd, " ").concat(object));
}

for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}