const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");


const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.parentElement.remove();

    });

});

addTaskBtn.addEventListener("click", function () {

    const addTaskName = prompt("Enter your task");

    if (addTaskName === null || addTaskName.trim() === "") {
        return;
    }

    const newTask = document.createElement("div");

    newTask.classList.add("task");

    newTask.innerHTML = `
        <span>📚 ${addTaskName}</span>

        <div class="task-actions">
            <span class="medium">Medium</span>
            <button class="delete-btn">❌</button>
        </div>
    `;

    const deleteBtn = newTask.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        newTask.remove();

    });

    taskContainer.appendChild(newTask);

});