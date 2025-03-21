const works = {
    "task1": { "title": "Task 1", "url": "works/task1/index.html", "color": "lightblue" },
    "task2": { "title": "Task 2", "url": "works/task2/index.html", "color": "lightcoral" },
    "task3": { "title": "Task 3", "url": "works/task3/landing.html", "color": "lightgreen" }
};

function loadWork(task) {
    const displayArea = document.getElementById("displayArea");
    const taskTitle = document.getElementById("taskTitle");
    const workFrame = document.getElementById("workFrame");

    displayArea.style.backgroundColor = works[task].color;
    taskTitle.textContent = works[task].title;
    workFrame.src = works[task].url;
}