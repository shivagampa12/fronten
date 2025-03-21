const works = {
    "task1": {  "url": "works/task1/index.html", "color": "lightblue" },
    "task2": {  "url": "works/task2/index.html", "color": "lightcoral" },
    "task3": {  "url": "works/task3/index.html", "color": "lightgreen" }
};

function loadWork(task) {
    const displayArea = document.getElementById("displayArea");
    const taskTitle = document.getElementById("taskTitle");
    const workFrame = document.getElementById("workFrame");

    displayArea.style.transition = "background-color 0.5s ease";
    displayArea.style.backgroundColor = works[task].color;

    taskTitle.style.opacity = 0;
    workFrame.style.opacity = 0;

    setTimeout(() => {
        taskTitle.textContent = works[task].title;
        workFrame.src = works[task].url;
        taskTitle.style.opacity = 1;
        workFrame.style.opacity = 1;
    }, 300);
}
