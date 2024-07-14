
<script lang="ts">
  export let time: string;
  export let currentModeLabel: string;
</script>

<div class="timer bg-base-300 my-4 rounded-xl">
  <p class="timer__label">{time}</p>
  <p class="timer__mode-label">It's {currentModeLabel} time</p>
</div>


<style>
  .timer {
    display: flex;
    flex-direction: column;
    align-items: center;


  }

  p {
    margin: 1rem 0;
  }
  .timer__label {
    font-size: 3em;
    font-weight: bold;
  }
  .timer__mode-label {
    font-size: 1.2rem;
  }
</style>