// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // List to display tasks

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if no task is entered
            return; // Exit the function if input is empty
        }

        // Create a new li element for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text of the li to the task text

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign class name to button

        // Assign onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove li from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask when button is clicked
    taskInput.addEventListener('keypress', function (event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});











// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // List to display tasks

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if no task is entered
            return; // Exit the function if input is empty
        }

        // Create a new li element for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text of the li to the task text

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign class name to button

        // Assign onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove li from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask when button is clicked
    taskInput.addEventListener('keypress', function (event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
