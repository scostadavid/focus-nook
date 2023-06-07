<script lang="ts">
  export let label;
  export let onTimerSelect;
</script>

<p class="timer">{label}</p>
<div class="list">
  <button on:click={() => onTimerSelect(25)}>
    Pomodoro
  </button>
  <button on:click={() => onTimerSelect(5)}>
    Short break
  </button>
  <button on:click={() => onTimerSelect(15)}>
    Long break
  </button>
</div>

<style>
  .timer {
    font-size: 3em;
    font-weight: bold;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 450px) {
    .list {
      flex-direction: column;
    }
  }
</style>