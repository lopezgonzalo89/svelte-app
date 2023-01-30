<script>
  let description = "Simple counter";
  let count = 0;
  let styles = { darkMode: false };

  function handleClick() {
    count++;
  }

  function handleTheme() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="About">
  <p>{description}</p>
  <button on:click={handleClick}>
    Click {count === 0 ? "" : count}
  </button>

  {#if count > 10}
    <p>Count is greater than 10</p>
  {:else if count > 5}
    <p>Count is greater than 5</p>
  {:else}
    <p>Count is less than 5</p>
  {/if}

  <button on:click={handleTheme}>
    {styles.darkMode ? "Light Mode" : "Dark Mode"}
  </button>
</div>

<style>
  p {
    color: var(--theme-color);
    font-size: 22px;
  }
</style>
