<script lang="ts">
  // let timer = new Date().toLocaleString();
  let timer = "25:00";


  let runningTimer: boolean = false;

  const toggleStatus = (): void => {
    runningTimer = !runningTimer;
  }

</script>

<main>

  <h1>Pomoclock 🍅</h1>
  

  <div class="button-list">
    <button on:click={toggleStatus}>
      Pomodoro
    </button> 
    <button on:click={toggleStatus}>
      Short break
    </button> 
    <button on:click={toggleStatus}>
      Long break
    </button>      
  </div>


  <p class="timer">{timer}</p>

  <div class="button-list">
    <button class={'button'} on:click={toggleStatus}>
      {runningTimer ? 'Pause' : 'Start'}
    </button>      

    <button class={'button'} on:click={() => null}>
      Reset
    </button>      
  </div>
  <p>
    Check out <a href={'https://github.com/scostadavid'} target={'_blank'} rel={'noreferrer'}>Github</a>
  </p>
</main>

<style>

main {
  border: 1px solid white;
}

.button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 1.2em 2em;
  margin: .2rem;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

.button:hover {
  border-color: #646cff;
}

.button:focus,
.button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.button-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.timer {
  font-size: 3em;
  font-weight: bold;
}
  
</style>