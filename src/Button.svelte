<script>
  export let label;
  export let onClick;
</script>

<button on:click={onClick}>
  {label}
</button>