<script>
  export let label = null;
  export let onClick = null;
</script>

<button class="btn btn-primary" on:click={onClick}>
  {#if label}
    {label}
  {:else}
    <slot/>
  {/if}
</button>
