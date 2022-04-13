const myForm = document.getElementById("todo");
const list = document.querySelector(".list-items");
myForm.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();
  const object = {}
  const soundsLike = document.getElementById("#soundLike").value;
  const userListItem = document.createElement("li");
  userListItem.appendChild(document.createTextNode(userInput));
  list.appendChild(userListItem);
  const myArray = map(listItems, getText);
  localStorage.setItem('userListItem', JSON.stringify(myArray));
}

const listItems = document.getElementsByTagName('li');


function map(arrayLike, fn) {
    var ret = [], i = -1, len = arrayLike.length;
    while (++i < len) ret[i] = fn(arrayLike[i]);
    return ret;
}

function getText(node) {
    if (node.nodeType === 3) return node.data;
    var txt = '';
    if (node = node.firstChild) do {
        txt += getText(node);
    } while (node = node.nextSibling);
    return txt;
}

<form id="todo">
  <input class="userAdd" type="text">
  <input  type="submit">
</form>
<ul class="list-items"></ul>