// Getting constant Values

const textBox = document.getElementById("todo");
const list = document.querySelector(".todo-list");

const addTodo = () => {
  const todo = textBox.value;
  if (todo === "") {
    alert("Enter Todo Task");
    return;
  }
  // Creating div p and span
  const div = document.createElement("div");
  const p = document.createElement("p");
  const span = document.createElement("span");
  p.textContent = todo;
  span.innerHTML = "❌";
  div.appendChild(p);
  div.appendChild(span);
  div.classList.add("contents");
  list.appendChild(div);
  textBox.value = "";

  const elements = Array.from(list.getElementsByTagName("div"));
  elements.forEach((element) => {
    const [pEl, spanEl] = element.childNodes;

    // Edit todo task
    pEl.addEventListener("click", () => {
      let originalTask = pEl.textContent;
      const modifiedTask = prompt("Modify Task", originalTask);
      pEl.textContent = modifiedTask !== "" ? modifiedTask : originalTask;
    });

    // Remove task
    spanEl.addEventListener("click", () => {
      element.remove("p");
    });
  });
};

document.getElementById("add").addEventListener("click", addTodo);

// adding Enter key to add new To-do
textBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
