const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");

const totalTasksCount = document.getElementById("totalTasksCount");
const inProgressCount = document.getElementById("inProgressCount");
const completedCount = document.getElementById("completedCount");
const productivityPercent = document.getElementById("productivityPercent");

function updateDashboard() {

    const tasks = document.querySelectorAll(".task");

    let total = tasks.length;
    let completed = 0;
    let inProgress = 0;

    tasks.forEach((task) => {

        if (task.querySelector(".done")) {
            completed++;
        } else {
            inProgress++;
        }

    });

    totalTasksCount.textContent = total;
    completedCount.textContent = completed;
    inProgressCount.textContent = inProgress;

    let productivity = 0;

    if (total > 0) {
        productivity = Math.round((completed / total) * 100);
    }

    productivityPercent.textContent = productivity + "%";

}

function addDeleteFunction(button) {

    button.addEventListener("click", function () {

        button.closest(".task").remove();

        updateDashboard();

    });

}

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((button) => {

    addDeleteFunction(button);

});

addTaskBtn.addEventListener("click", function () {

    const taskName = prompt("Enter your task");

    if (taskName === null || taskName.trim() === "") {
        return;
    }

    let priority = prompt(
        "Enter Priority:\nHigh\nMedium\nDone"
    );

    if (priority === null || priority.trim() === "") {
        priority = "Medium";
    }

    priority = priority.toLowerCase();

    let priorityClass = "medium";
    let priorityText = "Medium";

    if (priority === "high") {
        priorityClass = "high";
        priorityText = "High";
    }

    else if (priority === "done") {
        priorityClass = "done";
        priorityText = "Done";
    }

    const newTask = document.createElement("div");

    newTask.classList.add("task");

    newTask.innerHTML = `
        <span>📌 ${taskName}</span>

        <div class="task-actions">

            <span class="${priorityClass}">
                ${priorityText}
            </span>

            <button class="delete-btn">
                ❌
            </button>

        </div>
    `;

    taskContainer.appendChild(newTask);

    const deleteBtn = newTask.querySelector(".delete-btn");

    addDeleteFunction(deleteBtn);

    updateDashboard();

});

updateDashboard();