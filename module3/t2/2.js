'use strict';

let text = ['First item', 'Second item', 'Third item'];

for (let i = 0; i < text.length; i++) {
  let list = document.createElement('li');
  list.append(document.createTextNode(text[i]));
  document.getElementById('target').appendChild(list);
  if (i === 1) {
    list.classList.add('my-item');
  }
}