let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  text.innerHTML = "";

  tasks.forEach((task, index) => {
    let newEle = document.createElement("ul");

    newEle.innerHTML = `${task} <i class="fa-solid fa-trash"></i>`;

    text.appendChild(newEle);

    newEle.querySelector("i").addEventListener("click", () => {
      remove(index);
    });
  });
}

function Add() {
  if (inputs.value.trim() === "") {
    alert("Please enter a task");
  } else {
    let taskValue = inputs.value.trim();

    let newEle = document.createElement("ul");

    newEle.innerHTML = `${taskValue} <i class="fa-solid fa-trash"></i>`;

    text.appendChild(newEle);

    tasks.push(taskValue);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    inputs.value = "";

    showTasks();
  }
}

function remove(index) {
  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  showTasks();
}

showTasks();