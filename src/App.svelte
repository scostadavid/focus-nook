<!-- App.svelte -->
<script lang="ts">
  import Timer from './Timer.svelte';
  import Todo from './Todo.svelte';
</script>

<main class="flex flex-col justify-center">
  <header class="flex p-4 m-4 bg-base-200 rounded-lg justify-center">
    <p class="font-bold text-xl">🌱 Focus Garden</p>
  </header>
  <div class="p-4">
    <section class="bg-base-200 rounded-lg shadow">
      <Timer />
    </section>
  </div>
  <div class="p-4">
    <Todo />
  </div>
  
</main>