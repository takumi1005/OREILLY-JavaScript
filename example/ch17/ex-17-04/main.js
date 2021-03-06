// ORを表す正規表現
{
  const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>';
  const matches = html.match(/area|a|link|script|source/ig);
  console.log(matches); 
    // [ 'a', 'link', 'a', 'a', 'a', 'a', 'Script', 'script', 'script' ]
}

{
  const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>';
  const matches = html.match(/<area|<a|<link|<script|<source/ig);
  console.log(matches); // [ '<a', '<script' ]
}