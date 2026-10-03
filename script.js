const form = document.querySelector("#task-form");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const list = document.querySelector("#tasks");

form.addEventListener("submit", event => {
  event.preventDefault();

  const title = titleInput.value.trim();
  if (!title) {
    alert("Please enter a task title.");
    titleInput.focus();
    return;
  }

  const item = document.createElement("li");
  item.dataset.title = title.toLowerCase();

  const text = document.createElement("p");
  text.textContent = title + "\n" + descriptionInput.value.trim();

  const complete = document.createElement("button");
  complete.type = "button";
  complete.textContent = "Complete";
  complete.onclick = () => {
    const done = item.classList.toggle("done");
    complete.textContent = done ? "Undo" : "Complete";
  };

  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "Delete";
  remove.onclick = () => item.remove();

  item.append(text, complete, remove);
  list.append(item);
  // Refresh search here later.
  form.reset();
  titleInput.focus();
});