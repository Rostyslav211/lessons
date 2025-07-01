const input = document.getElementById("taskInput");
const button = document.getElementById("button");
const list = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function createTasks(textTask) {
    const value = textTask;
    // textTask = input.value;
    // const text = textTask;
    const li = document.createElement("li");
    li.textContent = value;
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    li.append(btn);
    return li;
}

function addTask() {
    const userValue = input.value;
    if (!userValue) return;
    tasks.push(userValue);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    list.append(createTasks(userValue));
    input.value = "";
}

function renderTasks(arrTask) {
    arrTask.forEach((task) => {
        list.append(createTasks(task));
    });
}

function deleteTask(event) {
    if (event.target.tagName === "BUTTON") {
        const taskText = event.target.parentElement.firstChild.textContent;
        tasks = tasks.filter((task) => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        event.target.parentElement.remove();

    }

}




renderTasks(tasks);
list.addEventListener('click', deleteTask)
button.addEventListener('click', addTask)