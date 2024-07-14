<script lang="ts">
  export let icon;
  export let sfx;

  import { onMount, onDestroy } from 'svelte';

  let audio: HTMLAudioElement;
  let volume = 0;
  let isPlaying = false;

  onMount(() => {
    audio = new Audio(import.meta.env.DEV ? `/${sfx}.wav` : `./${sfx}.wav`);
    audio.loop = true;
    audio.volume = volume / 100;

    return () => {
      audio.pause();
      audio = null;
    };
  });

  function handleVolumeChange(event) {
    volume = event.target.value;
    if (audio) {
      audio.volume = volume / 100;
    }
  }

  function togglePlay() {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
      isPlaying = !isPlaying;
    }
  }
</script>

<div class="flex flex-row space-between gap-4 mb-4 w-full">
  <p class="icon" on:click={togglePlay}>
    {#if icon === "fire"}
      <!-- fire -->
      <svg class={isPlaying ? 'playing' : 'paused'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.--><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>
    {:else if icon === "rain"}
      <!-- rain -->
      <svg class={isPlaying ? 'playing' : 'paused'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.--><path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/></svg>
    {:else if icon === "coffe"}
      <!-- coffe -->
      <svg class={isPlaying ? 'playing' : 'paused'} xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 640 512">
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.-->
        <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
      </svg>
    {/if}
  </p>
  <input type="range" min="0" max="100" value={volume} step="1" class="range w-full" on:input={handleVolumeChange}/>
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    cursor: pointer;
  }

  .icon svg {
    height: 2rem;
    width: 2rem;
  }

  .playing {
    fill: rgb(255, 255, 255);
  }

  .paused {
    fill: rgba(255, 230, 230, 0.242);
  }

  .range {
    flex-grow: 1;
    margin-left: 10px;
  }
</style>
