<script>
  export let label = null;
  export let onClick = null;
</script>

<button on:click={onClick}>
  {#if label}
    {label}
  {:else}
    <slot/>
  {/if}
</button>

<style>
  button {
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  /* @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }

    button {
      background-color: #f6f6f6;
    }
  } */
</style>