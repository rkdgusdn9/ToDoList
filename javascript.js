const submitButton = document.querySelector(".submit");
const toDoList = document.querySelector("#toDo");

const deleteListElement = function () {
  this.parentElement.remove();
};

const liClick = function () {
  toDoList.classList.toggle("done");
};

submitButton.addEventListener("click", function (e) {
  const inputValue = document.getElementById("listInput").value;
  const t = document.createTextNode(inputValue);
  const li = document.createElement("li");
  li.appendChild(t);
  if (inputValue === "") {
    alert("Write something to do!");
  } else {
    document.getElementById("toDo").appendChild(li);
  }
  document.getElementById("listInput").value = "";
  e.preventDefault();

  const delButton = document.createElement("button");
  const buttonTxt = document.createTextNode("Delete");
  delButton.className = "delete";
  delButton.appendChild(buttonTxt);
  li.appendChild(delButton);

  delButton.addEventListener("click", deleteListElement);
  li.addEventListener("click", liClick);
});
