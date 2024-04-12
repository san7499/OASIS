function addTask() {
    var taskTitleInput = document.getElementById("taskTitleInput");
    var taskDescriptionInput = document.getElementById("taskDescriptionInput");
    var taskTitle = taskTitleInput.value.trim();
    var taskDescription = taskDescriptionInput.value.trim();
    if (taskTitle === "" || taskDescription === "") {
        alert("Please enter a task title and description!");
        return;
    }
    var taskItem = "<li class='task-item'><h3>" + taskTitle + "</h3><p>" + taskDescription + "</p><span class='delete-button' onclick='deleteTask(this)'>X</span></li>";
    document.getElementById("tasksList").innerHTML += taskItem;
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
}

function deleteTask(deleteButton) {
    var taskItem = deleteButton.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}