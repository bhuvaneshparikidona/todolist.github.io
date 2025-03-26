function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value;
    var taskList = document.getElementById("taskList");

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    var listItem = document.createElement('li');
    listItem.innerText = taskValue;

    var buttonContainer = document.createElement('div');
    buttonContainer.className = "task-button";

    var deleteButton = document.createElement('button');
    deleteButton.className = "delete";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    var completeButton = document.createElement('button');
    completeButton.className = "complete";
    completeButton.innerText = "Complete";
    completeButton.onclick = function() {
        listItem.classList.toggle('completed');
    };

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);
    listItem.appendChild(buttonContainer);

    taskList.appendChild(listItem);
    taskInput.value = "";
}
