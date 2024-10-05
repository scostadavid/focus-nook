<script lang="ts">
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    let newTaskText = '';
    
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    
    const addTask = () => {
        if (newTaskText.trim()) {
            tasks = [...tasks, { text: newTaskText, done: false }];
            newTaskText = '';
            saveTasks();
        }
    };
    
    const toggleTask = (index: number) => {
        tasks[index].done = !tasks[index].done;
        saveTasks();
    };
    
    const deleteTask = (index: number) => {
        tasks = tasks.filter((_, i) => i !== index);
        saveTasks();
    };
    </script>
    
    <div class="bg-base-200 flex flex-col items-center rounded-lg">
        <section class="card p-4 w-full gap-4">
            <ul class="flex flex-col gap-2 w-full">
                {#each tasks as task, index}
                <li class="flex items-center mb-2 w-full">
                    <input
                        type="checkbox"
                        checked={task.done}
                        class="checkbox mr-2"
                        on:change={() => toggleTask(index)} />
                    <span class={task.done ? 'line-through text-gray-500' : ''}>{task.text}</span>
                    <button class="btn btn-error ml-auto" on:click={() => deleteTask(index)}>
                        delete
                    </button>
                </li>
                {/each}
            </ul>
            <form class="flex flex-col">
                <input
                    type="text"
                    bind:value={newTaskText}
                    placeholder="Add new todo"
                    class="input input-bordered w-full mb-2"
                    on:keypress={(e) => e.key === 'Enter' && addTask()} 
                />
                <button class="btn btn-primary" on:click={addTask}>Add +</button>
            </form>
        </section>
    </div>
