<script>
  export let count, text;
</script>

<button on:click>
  {text}
  {count === 0 ? "" : count}
</button>
