window.addEventListener('load', function () {
    var form = document.getElementById("new-task-form");
    var input = document.getElementById("new-task-input");
    var tasksList = document.getElementById("tasks");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var taskText = input.value;

        if (!taskText) {
            alert("Please enter a task!");
            return;
        }

        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        var taskContent = document.createElement('input');
        taskContent.type = 'text';
        taskContent.value = taskText;
        taskContent.className = 'text';
        taskContent.readOnly = true;
        taskElement.appendChild(taskContent);

        var actionsContainer = document.createElement('div');
        actionsContainer.className = 'actions';

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        actionsContainer.appendChild(editButton);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        actionsContainer.appendChild(deleteButton);

        taskElement.appendChild(actionsContainer);
        tasksList.appendChild(taskElement);
        input.value = '';

        editButton.addEventListener('click', function () {
            if (editButton.textContent === 'Edit') {
                editButton.textContent = 'Save';
                taskContent.readOnly = false;
                taskContent.focus();
            } else {
                editButton.textContent = 'Edit';
                taskContent.readOnly = true;
            }
        });

        deleteButton.addEventListener('click', function () {
            tasksList.removeChild(taskElement);
        });
    });
});
