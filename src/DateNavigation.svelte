<!-- src/components/DateNavigator.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  let currentDate: Date = new Date();

  function formatDate(date: Date): string {
    return date.toLocaleDateString('pt-BR', {
      month: 'short',
      day: 'numeric'
    });
  }

  function prev() {
    currentDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
    dispatch('change', currentDate);
  }

  function next() {
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    dispatch('change', currentDate);
  }

  onMount(() => {
    document.title = `(${formatDate(currentDate)}) Focus Garden`;
  });
</script>

<div class="flex items-center bg-base-200 rounded-lg shadow w-[200px]">
  <button
    class="btn btn-ghost rounded-r-lg border-r-0"
    on:click={prev}
    aria-label="Back">
    &lt;
  </button>

  <span class="flex-1 text-center border-x-0">
    {formatDate(currentDate)}
  </span>

  <button
    class="btn btn-ghost rounded-r-lg border-l-0"
    on:click={next}
    aria-label="Forward">
    &gt;
  </button>
</div>

<style>
  .btn {
    border-width: 1px;
  }
</style>
