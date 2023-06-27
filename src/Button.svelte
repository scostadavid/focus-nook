<script>
  export let label;
  export let onClick;
</script>

<button on:click={onClick}>
  {label}
</button>

<style>
  button {
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    margin: .2rem;
    font-size: 1em;
    font-weight: 500;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 12rem;
    /* width: 100%; */
    height: 5rem;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }

    button {
      background-color: #f6f6f6;
    }
  }
</style>