<script>
  let description = "Simple counter";
  let count = 0;

  const handleClick = () => {
    count++;
  };
</script>

<div class="About">
  <p>{description}</p>
  <button on:click={handleClick}>
    Click {count === 0 ? "" : count}
  </button>
</div>

<style>
  p {
    color: var(--theme-color);
    font-size: 22px;
  }
</style>
