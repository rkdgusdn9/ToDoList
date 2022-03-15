const submitButton = document.querySelector(".submit");
const toDoList = document.querySelector("ul");
const inputValue = document.getElementById("listInput").value;
let taskList = [];

const deleteListElement = function (e) {
  e.preventDefault();
  let todo = localStorage.getItem("mylist");
  taskList = JSON.parse(todo);
  taskList.splice(e, 1);
  localStorage.setItem("mylist", JSON.stringify(taskList));
  this.parentElement.remove();
};

const saveToDo = function () {
  localStorage.setItem("mylist", JSON.stringify(taskList));
};

toDoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("done");
    }
  },
  false
);

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const inputValue = document.getElementById("listInput").value;
  const t = document.createTextNode(inputValue);
  const li = document.createElement("li");

  li.appendChild(t);
  if (inputValue === "") {
    alert("Write something to do!");
  } else {
    taskList.push(inputValue);
    saveToDo();
    document.getElementById("toDo").appendChild(li);
  }
  document.getElementById("listInput").value = "";

  const delButton = document.createElement("button");
  const buttonTxt = document.createTextNode("Delete");
  delButton.className = "delete";
  delButton.appendChild(buttonTxt);
  li.appendChild(delButton);

  delButton.addEventListener("click", deleteListElement);
});
