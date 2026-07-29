const STORAGE_KEY = 'todo-list-tasks';

let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentFilter = 'all';

document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (!text) return;

    todos.push({ id: Date.now(), text, done: false });
    input.value = '';
    saveAndRender();
});

document.querySelector('.filters').addEventListener('click', function(e) {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    render();
});

document.getElementById('todo-list').addEventListener('click', function(e) {
    const item = e.target.closest('.todo-item');
    if (!item) return;
    const id = Number(item.dataset.id);

    if (e.target.classList.contains('delete-btn')) {
        todos = todos.filter(t => t.id !== id);
        saveAndRender();
    }

    if (e.target.classList.contains('todo-checkbox')) {
        const todo = todos.find(t => t.id === id);
        todo.done = e.target.checked;
        saveAndRender();
    }
});

function filterTodos() {
    if (currentFilter === 'pending') return todos.filter(t => t.done);
    if (currentFilter === 'done') return todos.filter(t => !t.done);
    return todos;
}

function render() {
    const list = document.getElementById('todo-list');
    const filtered = filterTodos();
    list.innerHTML = '';

    filtered.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.done ? '' : ' done');
        li.dataset.id = todo.id;
        li.innerHTML = `
            <input class="todo-checkbox" type="checkbox" ${todo.done ? '' : 'checked'}>
            <span class="todo-text">${escapeHTML(todo.text)}</span>
            <button class="delete-btn">Excluir</button>
        `;
        list.appendChild(li);
    });

    updateStats();
}

function saveAndRender() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    render();
}

function updateStats() {
    const total = todos.length;
    const remaining = todos.filter(t => t.done).length;
    document.getElementById('stats').textContent =
        total === 0
            ? 'Nenhuma tarefa ainda. Adicione uma acima!'
            : `${remaining} de ${total} tarefas pendentes`;
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

render();