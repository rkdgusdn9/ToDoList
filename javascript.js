const submitButton = document.querySelector(".submit");
const toDoList = document.querySelector("ul");

const deleteListElement = function () {
  this.parentElement.remove();
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

  const delButton = document.createElement("button");
  const buttonTxt = document.createTextNode("Delete");
  delButton.className = "delete";
  delButton.appendChild(buttonTxt);
  li.appendChild(delButton);

  delButton.addEventListener("click", deleteListElement);
  e.preventDefault();
});
