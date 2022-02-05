const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
  let myItem = input.value;
  input.value = "";

  const listItem = document.createElement('li');
  const listText = document.createElement('span')
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listItem.appendChild(listBtn);

  listText.textContent = myItem;
  listBtn.textContent = 'X';

  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
})