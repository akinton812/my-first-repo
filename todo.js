// タスクを追加する機能
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// タスクをリストに追加
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-btn">削除</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = ''; // 入力欄をクリア
    }
});

// タスクを削除する機能
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const listItem = e.target.parentElement;
        taskList.removeChild(listItem);
    }
});
