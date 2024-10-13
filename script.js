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
        removeButton.classList.add('remove-btn'); // Use classList.add to assign class

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

    // Initialize tasks array
    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks'); // Retrieve tasks from local storage
        if (storedTasks) {
            tasks = JSON.parse(storedTasks); // Parse the stored JSON string into an array
            tasks.forEach(taskText => {
                createTaskElement(taskText); // Create and display each task
            });
        }
    }

    // Function to create a task element
    function createTaskElement(taskText) {
        const li = document.createElement('li'); // Create a new li element
        li.textContent = taskText; // Set the text of the li to the task text

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.classList.add('remove-btn'); // Use classList.add to assign class

        // Assign onclick event to the remove button
        removeButton.onclick = function () {
            removeTask(taskText); // Call removeTask with the task text
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to the task list
        taskList.appendChild(li);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the task input value

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if no task is entered
            return; // Exit the function if input is empty
        }

        tasks.push(taskText); // Add the new task to the tasks array
        createTaskElement(taskText); // Create and display the new task
        saveTasks(); // Save the updated tasks array to local storage

        // Clear the task input field
        taskInput.value = '';
    }

    // Function to remove a task
    function removeTask(taskText) {
        tasks = tasks.filter(task => task !== taskText); // Remove the task from the array
        saveTasks(); // Save the updated tasks array to local storage
        loadTaskList(); // Refresh the displayed task list
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Store the tasks array as a JSON string
    }

    // Function to refresh the task list display
    function loadTaskList() {
        taskList.innerHTML = ''; // Clear the current task list display
        tasks.forEach(createTaskElement); // Recreate the task elements from the tasks array
    }

    // Load tasks on page load
    loadTasks();

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask when button is clicked
    taskInput.addEventListener('keypress', function (event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
