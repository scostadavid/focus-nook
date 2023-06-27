
<script lang="ts">
  export let time: string;
  export let currentModeLabel: string;
</script>

<div class="timer">
  <div class="timer__arc">
    <p class="timer__mode-label">{currentModeLabel}</p>
    <p class="timer__label">{time}</p>
  </div>
</div>


<style>
  .timer {
    padding: 2rem;
    border-radius: 20px;
  }
  .timer__label {
    font-size: 3em;
    font-weight: bold;
  }
  .timer__mode-label {
    font-size: 1.2rem;
  }
</style>