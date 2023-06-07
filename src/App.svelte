<script lang="ts">
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';
  import Timer from './Timer.svelte';
  import AppAbout from './AppAbout.svelte';

  enum TimerState {
    INITIALIZED,
    RUNNING,
    PAUSED,
    STOPPED,
  }

  let id: NodeJS.Timer = null;
  let label: string = "25:00";
  let targetSeconds: number = null;
  let initalTargetMinutes: number = 1;
  let buttonLabel;
  let state: TimerState = TimerState.INITIALIZED;

  const stateToLabel = (): void => {
    const labels = {
      [TimerState.INITIALIZED]: 'Start',
      [TimerState.RUNNING]: 'Pause',
      [TimerState.PAUSED]: 'Resume',
    }
    return labels[state];
  }

  const setup = (minutes: number = 1): void => {
    clearInterval(id);
    label = `${minutes.toString().padStart(2, '0')}:00`;
    state = TimerState.INITIALIZED;
    buttonLabel = stateToLabel();
    targetSeconds = minutes * 60;
    initalTargetMinutes = minutes;
  };

  const reset = (minutes: number = 1): void => {
    setup(minutes);
  }

  const triggerAction = (): void => {
    switch(state) {
      case TimerState.INITIALIZED:
        id = setInterval(_tick, 1000);
        state = TimerState.RUNNING;
        break;
      case TimerState.RUNNING:
        state = TimerState.PAUSED;
        break;
      case TimerState.PAUSED:
        state = TimerState.RUNNING;
        break;
    }
    buttonLabel = stateToLabel();
  }

  const _tick = (): void => {
    if (targetSeconds <= 0) {
      document.title = `Pomoclock - short break`;
      const SHORT_BREAK_MINUTES = 5;
      reset(SHORT_BREAK_MINUTES);
      return;
    }
    if (state === TimerState.PAUSED) return;
    targetSeconds--;
    const minutes = Math.floor(targetSeconds / 60);
    const seconds = targetSeconds - minutes * 60;
    buttonLabel = stateToLabel();
    label = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  };

  onMount(() => {
    document.title = `Pomoclock - ${label}`;
    setup(1);
  });
</script>

<main class="app">
  <section class="app__content">
    <Header />

    <Timer onTimerSelect={setup} {label} />

    <div class="button-list">
      <Button label={buttonLabel} onClick={triggerAction} />

      <Button label="Reset" onClick={() => reset(initalTargetMinutes)} />
    </div>

    <Footer />
  </section>

  <AppAbout />
</main>

<style>
  .app {
    /* background-color: #fff; */
  }

  .app__content {
    height: 100vh;
  }
</style>