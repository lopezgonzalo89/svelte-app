<script>
  import { count } from "../store/store.js";

  const handleClick = () => {
    count.update((n) => n + 1);
  };
</script>

<button on:click={handleClick}>
  Clicked {$count}
  {$count === 1 ? "time" : "times"}
</button>

<style>
  button {
    background-color: var(--theme-color-svelte);
    color: white;
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.25em;
    cursor: pointer;
    text-transform: uppercase;
  }
</style>
