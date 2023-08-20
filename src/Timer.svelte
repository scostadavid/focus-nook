
<script lang="ts">
  export let time: string;
  export let currentModeLabel: string;
</script>

<div class="timer">
  <p class="timer__label">{time}</p>
  <p class="timer__mode-label">It's {currentModeLabel} time</p>
</div>


<style>
  .timer {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    border-radius: 5px;
    background-color: #1A1A1A;

    margin: .5rem 0;

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