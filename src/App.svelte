<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import Button from './Button.svelte';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';
  import Timer from './Timer.svelte';

  enum TimerState {
    INITIALIZED,
    RUNNING,
    PAUSED
  }

  enum ModeState {
    FOCUS,
    REST
  }

  let timerId: NodeJS.Timer = null;
  let timerCurrentMode: ModeState = ModeState.FOCUS;
  let timerTimelabel: string = "25:00";
  let timerTargetSeconds: number = null;
  let timerInitalTargetMinutes: number = 25;
  let timerTriggerButtonLabel;
  let timerState: TimerState = TimerState.INITIALIZED;

  const SHORT_BREAK_MINUTES = 5;
  const LONG_BREAK_MINUTES = 15;
  const POMODORO_MINUTES = 25;

  const labels = {
    [TimerState.INITIALIZED]: 'Start',
    [TimerState.RUNNING]: 'Pause',
    [TimerState.PAUSED]: 'Resume',
  }

  const modeLabel = {
    [ModeState.FOCUS]: 'Focus 🎯',
    [ModeState.REST]: 'Rest 😴'
  };

  const triggerAudio = new Audio(import.meta.env.DEV ? '../../public/random.wav' : '/random.wav');

  const setup = (minutes: number, mode: ModeState): void => {
    clearInterval(timerId);
    timerTimelabel = `${minutes.toString().padStart(2, '0')}:00`;
    timerState = TimerState.INITIALIZED;
    timerTriggerButtonLabel = labels[timerState];
    timerCurrentMode = mode;
    timerTargetSeconds = minutes * 60;
    timerInitalTargetMinutes = minutes;
  };

  const reset = (minutes: number): void => {
    setup(minutes, timerCurrentMode);
  }

  const triggerAction = (): void => {
    switch(timerState) {
      case TimerState.INITIALIZED:
        timerId = setInterval(_tick, 1000);
        triggerAudio.play();
        timerState = TimerState.RUNNING;
        break;
      case TimerState.RUNNING:
        timerState = TimerState.PAUSED;
        break;
      case TimerState.PAUSED:
        triggerAudio.play();
        timerState = TimerState.RUNNING;
        break;
    }
    timerTriggerButtonLabel = labels[timerState];
  }

  const switchMode = (): void => {
    triggerAudio.play();
    if (timerCurrentMode === ModeState.FOCUS) {
      timerCurrentMode = ModeState.REST;
      setup(SHORT_BREAK_MINUTES, timerCurrentMode);
      document.title = `(${timerTimelabel}) Focus Nook - ${modeLabel[timerCurrentMode]}`;
      triggerAction();
      return;
    }
    timerCurrentMode = ModeState.FOCUS;
    document.title = `(${timerTimelabel}) Focus Nook - ${modeLabel[timerCurrentMode]}`;
    setup(POMODORO_MINUTES, timerCurrentMode);
    return;
  };

  const _tick = (): void => {
    if (timerTargetSeconds <= 0) {
      switchMode();
      return;
    }
    if (timerState === TimerState.PAUSED) return;
    timerTargetSeconds--;
    const minutes = Math.floor(timerTargetSeconds / 60);
    const seconds = timerTargetSeconds - minutes * 60;
    timerTriggerButtonLabel = labels[timerState];
    timerTimelabel = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  };

  onMount(() => {
    document.title = `(${timerTimelabel}) Focus Nook - ${modeLabel[timerCurrentMode]}`;
    setup(POMODORO_MINUTES, timerCurrentMode);
  });

  afterUpdate(() => {
    document.title = `(${timerTimelabel}) Focus Nook - ${modeLabel[timerCurrentMode]}`
  });
</script>

<main class="app">
  <Header />
  <section class="pomodoro">
    <div class="clock">
      <div class="clock--modes">
        <Button label={'Pomodoro'} onClick={() => setup(POMODORO_MINUTES, ModeState.FOCUS)}/>
        <Button label={'Short break'} onClick={() => setup(SHORT_BREAK_MINUTES, ModeState.REST)}/>
        <Button label={'Long break'} onClick={() => setup(LONG_BREAK_MINUTES, ModeState.REST)}/>
      </div>

      <Timer {...{currentModeLabel: modeLabel[timerCurrentMode], time: timerTimelabel}} />

      <div class="clock--options">
        <Button label={timerTriggerButtonLabel} onClick={triggerAction} />
        <Button label="Reset" onClick={() => reset(timerInitalTargetMinutes)} />
      </div>

    </div>
  </section>
  <Footer />
</main>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .pomodoro {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 4rem 0;

  }

  .clock {
    width: 500px;
  }

  .clock--modes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .5rem;
  }

  .clock--options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem;
  }

  @media (max-width: 700px) {
    .clock {
      width: 350px;
    }
  }
</style>